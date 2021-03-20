import userModel from '~models/userModel'
import bcrypt from 'bcryptjs'
import jwt, { decode } from 'jsonwebtoken'

const userDao = {
  async getTotalCount(query = {}) {
    return userModel.find(query).estimatedDocumentCount()
  },
  async findAll({ minIndex, itemPerPage }) {
    return userModel
      .find({})
      .sort({ createdAt: -1 })
      .skip(minIndex)
      .limit(itemPerPage)
  },

  async create(data) {
    const result = await userModel.create(data)
    return result
  },
  async findOne(query) {
    const result = await userModel.findOne(query)
    return result
  },

  async update(_id, data) {
    const item = await userModel.findOneAndUpdate(
      { _id },
      {
        $set: {
          ...data
        }
      },
      { new: true }
    )
    return item
  },
  async delete(_id) {
    const item = await userModel.findOneAndRemove({ _id })
    return item
  },
  async authenticate(email, password) {
    const user = await userModel.findOne({ email: email}).lean();
    console.log(user);
    if(user){
      let isMatch = await bcrypt.compare(password, user.password)
      if (isMatch == false) return null
    }
    return user
  }

}
export default userDao
