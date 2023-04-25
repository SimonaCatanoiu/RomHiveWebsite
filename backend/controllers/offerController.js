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