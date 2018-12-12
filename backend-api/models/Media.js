const mongoose = require('mongoose')
const Schema = mongoose.Schema,
      model = mongoose.model.bind(mongoose)
      ObjectId = mongoose.Schema.Types.ObjectId;

//  创建Schema
const mediaSchema = Schema({
  // _id: ObjectId,
  _id: String,
  title: String,
  mediaURL: String,
  imageURL: String,
  description: String
})

const Media = model('Media', mediaSchema)
module.exports = Media;