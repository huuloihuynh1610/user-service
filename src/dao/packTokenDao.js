import packTokenModel from "~models/packTokenModel";

const packTokenDao = {
  async getTotalCount(query = {}) {
    return packTokenModel.find(query).estimatedDocumentCount();
  },
  async findAll({ minIndex, itemPerPage }) {
    return packTokenModel
      .find({})
      .populate({
        path: "userId",
        select: ["_id", "email", "firstName", "lastName", "address"],
      })
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage);
  },

  async create(data) {
    const result = await packTokenModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await packTokenModel
      .findOne(query)
      .populate({
        path: "userId",
        select: ["_id", "email", "firstName", "lastName", "address"],
      });
    return result;
  },

  async update(_id, data) {
    const item = await packTokenModel.findOneAndUpdate(
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
    const item = await packTokenModel.findOneAndRemove({ _id });
    return item;
  },
};
export default packTokenDao;
