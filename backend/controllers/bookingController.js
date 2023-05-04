import Booking from "../models/Booking.js"
//add new booking
export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)
    try{
        const savedBooking = await newBooking.save()
        res.status(200).json(
            {
                success:true,message:'Your offer is booked',
                data:savedBooking
            }
        )
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