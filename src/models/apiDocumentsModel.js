import mongoose from 'mongoose'
const apiDocumnetsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true
    },
    content: {
        type: String,
        trim: true
      },
    apiId: { type: mongoose.Schema.Types.ObjectId, ref: 'api' },

  },
  { timestamps: {} }
)

const apiDocument = mongoose.model('apiDocument', apiDocumnetsSchema)
export default apiDocument
