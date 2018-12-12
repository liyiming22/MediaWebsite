const Model = require('../models/Media')
const Media = Model

const mediaController = {
  allMedia (req, res) {
    Media.find({})
    .exec((err, medias) => res.json(medias))
  },

  byId (req, res) {
    const idParam = req.params.id
    Media
      .findOne({_id: idParam})
      .exec((err, media) => res.json(media))
  },

  // create
  create (req, res) {
    // 创建一个新的媒体对象
    const newMedia = new Media({
      _id: req.body._id,
      title: req.body.title,
      mediaURL: req.body.mediaURL,
      imageURL: req.body.imageURL,
      description: req.body.description
    })
    // 存入数据库中
    newMedia.save()
            .then(media => res.json(media))
            .catch(err => console.log(err))
  }
  // update
  // remove
}

module.exports = mediaController