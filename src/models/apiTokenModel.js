import mongoose from 'mongoose'
const apiTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      trim: true
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
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

const apiToken = mongoose.model('apiTokens', apiTokenSchema)
export default apiToken
