const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

//  实例化
const app = express()

//  引入media请求路由
const  mediaReq = require('./routes/api/mediaReq')

//  DB 配置
const db = require('./config/keys').mongoURI

//  使用body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//  连接DB
mongoose.connect(db)
        .then(() => console.log("MonogoDB Connected"))
        .catch(err => console.log(err))

//  使用路由
app.use("/api/mediaReq", mediaReq)

// 端口号
const port = 5000

//  监听
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})