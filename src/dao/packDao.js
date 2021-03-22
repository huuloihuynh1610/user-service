import packModel from '~models/packModel'

const packDao = {
  async getTotalCount(query = {}) {
    return packModel.find(query).estimatedDocumentCount()
  },
  async findAll({ minIndex, itemPerPage }) {
    return packModel
      .find({})
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage)
  },

  async create(data) {
    const result = await packModel.create(data)
    return result
  },
  async findOne(query) {
    const result = await packModel.findOne(query)
    return result
  },

  async update(_id, data) {
    const item = await packModel.findOneAndUpdate(
      { _id },
      {
        $set: {
          ...data
        }
      },
      { new: true }
    )
    return item
  },
  async delete(_id) {
    const item = await packModel.findOneAndRemove({ _id })
    return item
  },
}
export default packDao
