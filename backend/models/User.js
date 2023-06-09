import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required:true
    },
    firstname: {
        type:String,
        required:true,
    },
    lastname: {
        type: String,
        required:true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
        type:String,
        required: true,
    },
    photo: {
      type: String,
    },
    date_of_birth: {
        type: Date,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);