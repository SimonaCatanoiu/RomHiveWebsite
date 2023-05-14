import mongoose from "mongoose";

const userlogsSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    month: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model("UserLogs", userlogsSchema);