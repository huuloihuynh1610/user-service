import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email :{
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password :{
      type: String,
      required: true,
      trim: true,
    },    
    role: {
      type: String,
      default: 1,
    },
    role: {
      type: String,
      default: 1,
    },
    address: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: {} }
);
const user = mongoose.model("users", userSchema);
export default user;
