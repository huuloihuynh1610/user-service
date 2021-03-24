import apiDocumentsModel from "~models/apiDocumentsModel";

const apiDocumentsDao = {
  async getTotalCount(query = {}) {
    return apiDocumentsModel.find(query).estimatedDocumentCount();
  },
  async findAll({ minIndex, itemPerPage }) {
    return apiDocumentsModel
      .find({})
      .populate({
        path: "apiId",
      })
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage);
  },

  async create(data) {
    const result = await apiDocumentsModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await apiDocumentsModel
      .findOne(query)
      .populate({
        path: "apiId",
      });
    return result;
  },

  async update(_id, data) {
    const item = await apiDocumentsModel.findOneAndUpdate(
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
    const item = await apiDocumentsModel.findOneAndRemove({ _id });
    return item;
  },
};
export default apiDocumentsDao;
