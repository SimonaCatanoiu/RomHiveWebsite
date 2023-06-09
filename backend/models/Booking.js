import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required:true
    },
    offerId: {
      type: String,
      required:true
    },
    userEmail: {
      type: String,
    },
    offerName: {
      type:String,
      required:true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize:{
      type:String,
      required:true
    },
    phone:{
      type:String,
      required:true
    },
    price:{
      type:String,
      required:true
    },
    bookAt:{
      type:Date,
      required:true
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);