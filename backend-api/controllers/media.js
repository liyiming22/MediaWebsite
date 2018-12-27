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

    const newMedia = new Media({
      _id: req.body._id,
      title: req.body.title,
      mediaURL: req.body.mediaURL,
      imageURL: req.body.imageURL,
      description: req.body.description
    })

    newMedia.save()
            .then(media => res.json(media))
            .catch(err => console.log(err))
  },

  // remove
  remove (req, res) {
    const idParam = req.params.id
    Media
      .findOne({_id: idParam}).remove( (err, removed) => {
        res.json(idParam)
      })
  }
}

module.exports = mediaController