import apiTokenDetailModel from "~models/apiTokenDetailModel";

const apiTokenDetailDao = {
  async getTotalCount(query = {}) {
    return apiTokenDetailModel.find(query).estimatedDocumentCount();
  },
  async findAll({ minIndex, itemPerPage }) {
    return apiTokenDetailModel
      .find({})
      .populate({
        path: "userId",
        select: ["_id", "email", "firstName", "lastName", ""],
      })
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage);
  },

  async create(data) {
    const result = await apiTokenDetailModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await apiTokenDetailModel
      .findOne(query)
      .populate({
        path: "userId",
        select: ["_id", "email", "firstName", "lastName", ""],
      });
    return result;
  },

  async update(_id, data) {
    const item = await apiTokenDetailModel.findOneAndUpdate(
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
    const item = await apiTokenDetailModel.findOneAndRemove({ _id });
    return item;
  },
};
export default apiTokenDetailDao;
