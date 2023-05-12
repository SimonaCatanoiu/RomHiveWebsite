import Booking from "../models/Booking.js"
import mongoose from "mongoose";
//add new booking
export const createBooking = async(req,res)=>{
    const bookingData = req.body;
    const newBooking = new Booking(bookingData)
    //first we get the correspondent offer and decrease the noPackets
    const Offer = mongoose.model("Offer");
    const offer = await Offer.findById(req.body.offerId);
    console.log(offer.maxGroupSize)
    try{
        if (offer) {
        if (offer.noPackets > 0) {
            if(offer.maxGroupSize>=bookingData.guestSize)
            {
                offer.noPackets -= 1;
                const savedBooking = await newBooking.save()
                await offer.save();
                res.status(200).json(
                    {
                        success:true,message:'Your offer is booked',
                        data:savedBooking
                    }
                )
            }
            else
            {
                return res.status(500).json({ success: false, message: "Group size greater than limit." });
            }

        } else {
            return res.status(500).json({ success: false, message: "No more bookings available for this offer" });
        }
        } else {
        return res.status(404).json({ success: false, message: "Offer not found" });
        }    
    }
        catch(err)
        {
            res.status(500).json({success:false,message:'Internal Server Error'}) 
        }
}
//get booking
export const getBooking = async(req,res)=> {
    const id = req.params.id
    try{
        const book=await Booking.findById(id)
        res.status(200).json(
            {
                success:true,message:'Succesful',
                data:book
            }
        )
    } 
    catch(err)
    {
        res.status(404).json({success:false,message:'Not Found'}) 
    }
}

//get all bookings
export const getAllBooking = async(req,res)=> {
    try{
        const books=await Booking.find()
        res.status(200).json(
            {
                success:true,
                message:'Succesful',
                data:books
            }
        )
    }
    catch(err)
    {
        res.status(500).json({success:false,message:'Internal Server Error'}) 
    }
}