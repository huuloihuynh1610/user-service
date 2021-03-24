import mongoose from 'mongoose'
const billSchema = new mongoose.Schema(
  {
    status :{
        type:Boolean,
        default:false,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    paymentId: { type: mongoose.Schema.Types.ObjectId, ref: 'payment'},
    type:{
        type:String,
        default:1
    },
    totolPrice :{
        type:Number,
        default:0
    }

  },
  { timestamps: {} }
)

const bill = mongoose.model('bill', billSchema)
export default bill
