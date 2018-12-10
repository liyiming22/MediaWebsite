//  api 路由
const express = require('express')
const router = express.Router()

const mediaController = require('../../controllers/media')

// $route GET api/mediaReq/test
// @desc  返回请求的json数据
//  test
router.get("/test", (req, res) => {
  res.json({msg: "test works"})
})

// $route GET api/mediaReq/medias || /medias/:id
// @desc  返回请求的json数据
// 查找
router.get('/medias', mediaController.allMedia)
router.get('/medias/:id', mediaController.byId)
router.post('/medias', mediaController.create)

// 更新、删除

module.exports = router