import mongoose from 'mongoose'
const apiTokenDetailSchema = new mongoose.Schema(
  {
    apiTokenId: { type: mongoose.Schema.Types.ObjectId, ref: 'apiTokens' },
  },
  { timestamps: {} }
)

const apiTokenDetails = mongoose.model('apiTokenDetails', apiTokenDetailSchema)
export default apiTokenDetails
