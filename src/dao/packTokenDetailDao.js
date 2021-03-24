import packTokenDetailModel from "~models/packTokenDetailModel";

const packTokenDetailDao = {
  async getTotalCount(query = {}) {
    return packTokenDetailModel.find(query).estimatedDocumentCount();
  },
  async findAll({ minIndex, itemPerPage }) {
    return packTokenDetailModel
      .find({})
      .populate({
        path: "packApiId",
      }).populate({
        path: "packTokenId",
      })
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage);
  },

  async create(data) {
    const result = await packTokenDetailModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await packTokenDetailModel
      .findOne(query)
      .populate({
        path: "packApiId",
      });
    return result;
  },

  async update(_id, data) {
    const item = await packTokenDetailModel.findOneAndUpdate(
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
    const item = await packTokenDetailModel.findOneAndRemove({ _id });
    return item;
  },
};
export default packTokenDetailDao;
