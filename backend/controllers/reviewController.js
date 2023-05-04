import Offer from "../models/Offer.js"
import Review from "../models/Review.js"

export const createReview = async(req,res)=> {
    const offerId = req.params.offerId
    const newReview = new Review({... req.body})
    try{
        const savedReview = await newReview.save()
        
        //update the offer with the new review
        await Offer.findByIdAndUpdate(offerId,{
            $push: {
                reviews: savedReview._id
            }
        })

        res.status(200).json({success:true,message:'Review submitted',
    data:savedReview})

    }catch(err)
    {
        res.status(500).json({success:false,message:'Failed to submit'})
    }
}