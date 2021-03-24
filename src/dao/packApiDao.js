import packApiModel from "~models/packApiModel";

const packApiDao = {
  async getTotalCount(query = {}) {
    return packApiModel.find(query).estimatedDocumentCount();
  },
  async findAll({ minIndex, itemPerPage }) {
    return packApiModel
      .find({})
      .populate({
        path: "packId",
      }).populate({
        path:"apiId"
      })
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage);
  },

  async create(data) {
    const result = await packApiModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await packApiModel
      .findOne(query)
      .populate({
        path: ["userId"],
      });
    return result;
  },

  async update(_id, data) {
    const item = await packApiModel.findOneAndUpdate(
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
    const item = await packApiModel.findOneAndRemove({ _id });
    return item;
  },
};
export default packApiDao;
