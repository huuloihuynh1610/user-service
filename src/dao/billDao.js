import billModel from "~models/billModel";

const billDao = {
  async getTotalCount(query = {}) {
    return billModel.find(query).estimatedDocumentCount();
  },
  async findAll({ minIndex, itemPerPage }) {
    return billModel
      .find({})
      .populate({
        path: "userId",
      })
      .populate({
        path: "paymentId",
      })
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage);
  },

  async create(data) {
    const result = await billModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await billModel
      .findOne(query)
      .populate({
        path: "userId",
      })
      .populate({
        path: "paymentId",
      })
    return result;
  },

  async update(_id, data) {
    const item = await billModel.findOneAndUpdate(
      { _id },
      {
        $set: {
          ...data,
        },
      },
      { new: true }
    );
    return item;
  },
  async delete(_id) {
    const item = await billModel.findOneAndRemove({ _id });
    return item;
  },
};
export default billDao;
