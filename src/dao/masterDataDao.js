import masterDataModel from "~models/masterDataModel";

const masterDataDao = {
  async findAll() {
    return masterDataModel
      .find({})
      .sort({ createdAt: -1 })
    },

  async create(data) {
    const result = await masterDataModel.create(data);
    return result;
  },
  async findOne(query) {
    const result = await masterDataModel
      .findOne(query)
    return result;
  },

  async update(_id, data) {
    const item = await masterDataModel.findOneAndUpdate(
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
    const item = await masterDataModel.findOneAndRemove({ _id });
    return item;
  },
};
export default masterDataDao;
