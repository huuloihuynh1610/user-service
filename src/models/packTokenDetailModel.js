import mongoose from 'mongoose'
const packTokenDetailSchema = new mongoose.Schema(
  {
    packTokenId: { type: mongoose.Schema.Types.ObjectId, ref: 'packTokens' },
    packApiId : { type: mongoose.Schema.Types.ObjectId, ref: 'packApi' }
  },
  { timestamps: {} }
)

const packTokenDetails = mongoose.model('packTokenDetails', packTokenDetailSchema)
export default packTokenDetails;
/**
 * @swagger
 * definitions:
 *  PackTokenDetails:
 *    type: object
 *    properties:
 *      packTokenId:
 *        type: string
 *      packApiId:
 *        type: string
 * 
 */
