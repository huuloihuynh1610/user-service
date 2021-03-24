import mongoose from 'mongoose'
const apiSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    params: {
      type: Object,
      required: true,
    },
    link:{
      type: String,
      required: true,
    }
    // apiTokenId: { type: mongoose.Schema.Types.ObjectId, ref: 'apiTokens' },

  },
  { timestamps: {} }
)

const api = mongoose.model('api', apiSchema)
export default api
