import mongoose from 'mongoose'
const packTokensSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      trim: true
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    packId: { type: mongoose.Schema.Types.ObjectId, ref: 'Packs' },
    status : {
        type: Boolean,
        default: true
    },
    isShare : {
        type: Boolean,
        default: true
    },
    expriedDate : {
        type: Number,
        default: 0
    }
  },
  { timestamps: {} }
)

const packTokens = mongoose.model('packTokens', packTokensSchema)
export default packTokens
