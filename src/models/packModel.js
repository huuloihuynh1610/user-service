import mongoose from "mongoose";
const PacksSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      default: 1,
    },
    amount: {
      type: String,
      required: true,
      default: 1,
    },
    expriedDate: {
      type: Date, 
      default: Date.now
    },
  },
  { timestamps: {} }
);
const Pack = mongoose.model("Packs", PacksSchema);
export default Pack;
/**
 * @swagger
 * definitions:
 *  Pack:
 *    type: object
 *    properties:
 *      name:
 *        type: string
 *      price:
 *        type: number
 *      type:
 *        type: string
 *      amount:
 *        type:number
 *      expriedDate:
 *        type : Date
 */
