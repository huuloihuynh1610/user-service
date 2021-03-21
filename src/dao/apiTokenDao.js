import apiTokenModel from "~models/apiTokenModel";

const apiTokenDao = {
  async getTotalCount(query = {}) {
    return apiTokenModel.find(query).estimatedDocumentCount();
  },
  async findAll({ minIndex, itemPerPage }) {
    return apiTokenModel
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
    const result = await apiTokenModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await apiTokenModel
      .findOne(query)
      .populate({
        path: "userId",
        select: ["_id", "email", "firstName", "lastName", ""],
      });
    return result;
  },

  async update(_id, data) {
    const item = await apiTokenModel.findOneAndUpdate(
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
    const item = await apiTokenModel.findOneAndRemove({ _id });
    return item;
  },
};
export default apiTokenDao;
