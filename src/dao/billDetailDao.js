import billDetailModel from "~models/billDetailModel";

const billDetailDao = {
  async getTotalCount(query = {}) {
    return billDetailModel.find(query).estimatedDocumentCount();
  },
  async findAll({ minIndex, itemPerPage }) {
    return billDetailModel
      .find({})
      .populate({
        path: "billId",
      })
      .populate({
        path: "packId",
      })
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage);
  },

  async create(data) {
    const result = await billDetailModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await billDetailModel
      .findOne(query)
      .populate({
        path: "billId",
      })
      .populate({
        path: "packId",
      })
    return result;
  },

  async update(_id, data) {
    const item = await billDetailModel.findOneAndUpdate(
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
    const item = await billDetailModel.findOneAndRemove({ _id });
    return item;
  },
};
export default billDetailDao;
