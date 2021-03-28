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
      })
      .populate({
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
    const result = await packTokenDetailModel.findOne(query).populate({
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
  async getApibyMonth(firstDay, lastDay) {
    // const item1 = packTokenDetailModel.aggregate([
    //   {
    //     $group: {
    //       _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
    //       count: { $sum: 1 },
    //     },
    //   },
    //   {
    //     $match: {
    //       _id: {
    //         $gte: new Date(firstDay).toISOString(),
    //         $lt: new Date(lastDay).toISOString(),
    //       },
    //     },
    //   },
    //   {
    //     $sort: { _id: 1 },
    //   },
    // ]);

    const item2 = packTokenDetailModel.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          count: { $sum: 1 },
        },
      },
      {
        $match: {
          _id: {
            $gte: new Date(firstDay).toISOString(),
            $lt: new Date(lastDay).toISOString(),
          },
        },
      },
      { $group: { _id: null, total_sum: { $sum: "$count" } } },
    ]);
    const item1 = packTokenDetailModel.aggregate([
      {
        $group: {
          _id: {
            id: "$packApiId",
            date: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
          },
          num: { $sum: 1 },
        },
      },
      {
        $group: {
          _id: "$_id.id",
          counts: { $push: { date: "$_id.date", count: "$num" } },          
        },
        
      },
      {
        $project: {
          _id: 1,
          counts: 1,
          // total: {
          //   $sum: "$counts.count",
          // },
          counts : { 
            $filter: {
            input: "$counts",
            as: "item",
            cond: { 
              "$and": [
                {$gte: [ "$$item.date", new Date(firstDay).toISOString() ]},
                {$lt: [ "$$item.date", new Date(lastDay).toISOString() ]}
              ]             
            }
          }}
        },        
      },
      {
        $sort: { _id: 1 },
      },
    ]);
    const response = await Promise.all([item1, item2]);
    return { total: response[1][0].total_sum, data: response[0] };
    // const response = await Promise.all([item1]);
    // return response;
  },
};
export default packTokenDetailDao;
