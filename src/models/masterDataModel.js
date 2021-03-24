import mongoose from 'mongoose'
const masterDataSchema = new mongoose.Schema(
  {
    content: {
      type: Object,
      trim: true
    },
    type: {
        type: Number,
        trim: true
      },

  },
  { timestamps: {} }
)

const masterData = mongoose.model('masterData', masterDataSchema)
export default masterData
