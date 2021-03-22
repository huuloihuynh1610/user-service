import paymentModel from '~models/paymentModel'

const paymentDao = {
  async getTotalCount(query = {}) {
    return paymentModel.find(query).estimatedDocumentCount()
  },
  async findAll({ minIndex, itemPerPage }) {
    return paymentModel
      .find({})
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage)
  },

  async create(data) {
    const result = await paymentModel.create(data)
    return result
  },
  async findOne(query) {
    const result = await paymentModel.findOne(query)
    return result
  },

  async update(_id, data) {
    const item = await paymentModel.findOneAndUpdate(
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
    const item = await paymentModel.findOneAndRemove({ _id })
    return item
  },
}
export default paymentDao
