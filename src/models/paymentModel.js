import mongoose from "mongoose";
const paymentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      default: 1,
    },
  },
  { timestamps: {} }
);
const payment = mongoose.model("payment", paymentSchema);
export default payment;
