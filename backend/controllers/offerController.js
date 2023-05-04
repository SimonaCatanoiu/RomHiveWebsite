import Offer from '../models/Offer.js'

//create new Offer
export const createOffer = async (req,res) =>
{
    const newOffer = new Offer(req.body)
    try {
        const savedOffer = await newOffer.save()

        res.status(200).json({success:true,message:'Successfully created offer', data:savedOffer})
    }catch(err)
    {
        res.status(500).json({success:false,message:'Failed to create offer. Try again', data:savedOffer})
    }
}

//update Offer
export const updateOffer = async(req,res) => {
    const id = req.params.id
    try {
        const updatedTour = await Offer.findByIdAndUpdate(id,
            {
                $set: req.body
            }, {new:true})
        
            res.status(200).json({success:true,message:'Successfully updated offer', data:updatedTour})
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Failed to update offer. Try again', data:updatedTour})
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