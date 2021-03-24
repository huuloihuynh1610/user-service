import mongoose from 'mongoose'
const billDetailSchema = new mongoose.Schema(
  {
    billId: { type: mongoose.Schema.Types.ObjectId, ref: 'bill' },
    packId: { type: mongoose.Schema.Types.ObjectId, ref: 'Packs'},
    type:{
        type:String,
        default:1
    },
    price :{
        type:Number,
        default:0
    },
    amount :{
        type:Number,
        default:0
    }

  },
  { timestamps: {} }
)

const billDetail = mongoose.model('billDetail', billDetailSchema)
export default billDetail
