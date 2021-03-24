import apiModel from "~models/apiModel";

const apiDao = {
  async getTotalCount(query = {}) {
    return apiModel.find(query).estimatedDocumentCount();
  },
  async findAll({ minIndex, itemPerPage }) {
    return apiModel
      .find({})
      .populate({
        path: "apiTokenId",
      })
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage);
  },

  async create(data) {
    const result = await apiModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await apiModel
      .findOne(query)
      .populate({
        path: "apiTokenId",
      });
    return result;
  },

  async update(_id, data) {
    const item = await apiModel.findOneAndUpdate(
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
    const item = await apiModel.findOneAndRemove({ _id });
    return item;
  },
};
export default apiDao;
