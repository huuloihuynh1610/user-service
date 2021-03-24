import mongoose from 'mongoose'
const packApiSchema = new mongoose.Schema(
  {
    packId: { type: mongoose.Schema.Types.ObjectId, ref: 'Packs' },
        apiId: { type: mongoose.Schema.Types.ObjectId, ref: 'api' },

  },
  
  { timestamps: {} }
)

const packApi = mongoose.model('packApi', packApiSchema)
export default packApi
