import Offer from '../models/Offer.js'
import multiparty from 'multiparty';
import fs from 'fs';

//create new Offer
export const createOffer = async (req,res) =>
{
  let form = new multiparty.Form();
  const { fields, files } = await new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        return reject(err);
      }
      resolve({ fields, files });
    });
  });

  try {
    const { title, city, distance, address, desc, price, maxGroupSize, noPackets, featured } = fields;

    const newOffer = new Offer({
      title: title[0].toString(),
      city: city[0].toString(),
      distance: parseInt(distance[0]),
      address: address[0].toString(),
      desc: desc[0].toString(),
      price: parseInt(price[0]),
      maxGroupSize: maxGroupSize[0],
      noPackets: parseInt(noPackets[0]),
      featured: featured[0] === 'true',
    });

      const file = files.offerPicture[0];
      const fileName = Date.now() + '-' + file.originalFilename;
      const path = file.path;
      const targetPath = 'adminuploads/' + fileName;
      const data = await fs.promises.readFile(path);
      await fs.promises.writeFile(targetPath, data);
      await fs.promises.unlink(path);
      newOffer.photo = targetPath;
      await newOffer.save();

    res.status(201).json({ message: 'Offer created successfully', success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const updateOffer = async (req, res) => {
    const offerId = req.params.id;
  
    let form = new multiparty.Form();
    const { fields, files } = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) {
          return reject(err);
        }
        resolve({ fields, files });
      });
    });
  
    try {
      let offer = await Offer.findById(offerId);
      if (!offer) {
        return res.status(404).json({ message: 'Offer not found' });
      }
  
      // Update offer fields
      const { title, city, distance, address, desc, price, maxGroupSize, noPackets, featured } = fields;
      if (title) {
        offer.title = title[0].toString();
      }
      if (city) {
        offer.city = city[0].toString();
      }
      if (distance) {
        offer.distance = parseInt(distance[0]);
      }
      if (address) {
        offer.address = address[0].toString();
      }
      if (desc) {
        offer.desc = desc[0].toString();
      }
      if (price) {
        offer.price = parseInt(price[0]);
      }
      if (maxGroupSize) {
        offer.maxGroupSize = maxGroupSize[0];
      }
      if (noPackets) {
        offer.noPackets = parseInt(noPackets[0]);
      }
      if (featured) {
        offer.featured = featured[0] === 'true';
      }
      // Save the updated offer
      await offer.save();
      // Handle the image file
      if (files.hasOwnProperty('offerPicture') && files.offerPicture.length > 0) {
        const file = files.offerPicture[0];
        const fileName = Date.now() + '-' + file.originalFilename;
        const path = file.path;
        const targetPath = 'adminuploads/' + fileName;
        const data = await fs.promises.readFile(path);
        await fs.promises.writeFile(targetPath, data);
        await fs.promises.unlink(path);
  
        offer.photo = targetPath;
        await offer.save();
      }
  
      res.status(200).json({ message: 'Offer updated successfully', offer });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: 'Internal server error' });
    }
  }

//delete Offer
export const deleteOffer = async(req,res) => {
    const id = req.params.id
    try {
        await Offer.findByIdAndDelete(id)
        res.status(200).json({success:true,message:'Successfully deleted'})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Failed to delete offer. Try again'})
    }
}

//getSingle Offer
export const getSingleOffer = async(req,res) => {
    const id = req.params.id
    try {
        const offer = await Offer.findById(id).populate("reviews")
        res.status(200).json({success:true,message:'Item found',data:offer})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Not found'})
    }
}

//getAll Offers
export const getAllOffer = async(req,res) => {

    //for pagination (offers page)
    const page = parseInt(req.query.page)

    try {
        const offers = await Offer.find({}).populate("reviews").skip(page * 8).limit(8)
        res.status(200).json({success:true,count:offers.length,message:'Succesfully pulled',data:offers})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Coudnt pull'})
    }
}

//getAll Offers for admin
export const getAllOfferDetails = async (req, res) => {
  try {
    const offers = await Offer.find().lean().exec();
    const tripsRows = offers.map((offer) => {
      const city = offer.address.split(',')[0].trim();
      const country = offer.address.includes(',') ? offer.address.split(',')[1].trim() : '';
      return {
        id: offer._id,
        picture: offer.photo,
        name: offer.title,
        price: offer.price.toString(),
        city: city,
        country: country,
        feature: offer.featured ? 'yes' : 'no',
      };
    });

    res.status(200).json({ Tripsrows: tripsRows });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while retrieving offer details.' });
  }
};

//get offer by search
export const getOfferBySearch = async(req,res) => {

    const city = new RegExp(req.query.city,'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)

    try {
        const offers = await Offer.find({city,distance:{$gte:distance},maxGroupSize:{$gte:maxGroupSize}}).populate("reviews")

        res.status(200).json({success:true,message:'Succesful',data:offers})
    }
    catch(err)
    {
        res.status(404).json({success:false,message:'Not found'})
    }
}

//get featured offer
export const getFeaturedOffer = async(req,res) => {

    try {
        const offers = await Offer.find({featured:true}).populate("reviews").limit(8);
        res.status(200).json({success:true,count:offers.length,message:'Succesfully pulled',data:offers})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Coudnt pull'})
    }
}

//get tour counts
export const getOfferCount = async(req,res) =>
{
    try{
        const offerCount = await Offer.estimatedDocumentCount()

        res.status(200).json({success:true,data:offerCount})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'failed to fetch'})
    }
}

//delete review from offer
export const deleteReview = async (req, res) => {
    try {
      const offerId = req.body.offerId;
      const reviewId = req.body.reviewId;
      const offer = await Offer.findById(offerId);
  
      if (!offer) {
        return res.status(404).json({ error: 'Offer not found' });
      }
  
      const reviewIndex = offer.reviews.findIndex((review) => review.toString() === reviewId);
  
      if (reviewIndex === -1) {
        return res.status(404).json({ error: 'Review not found' });
      }
      offer.reviews.splice(reviewIndex, 1);
      await offer.save();
      return res.json({ success:true,message: 'Review deleted successfully' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Server error' });
    }
  };