/*
 * @Author: cewei
 * @Date:   2018-07-04 20:54:55
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-07 10:49:46
 */
const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
//引入路由
const userRouter = require('./user')
//引入model
const models = require('./model')


const app = express()
//body解析中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}))
//cookie解析中间件
app.use(cookieParser())
//路由中间件
app.use('/user', userRouter)


app.listen(9000, function() {
	console.log('服务器启动成功，请于9000端口访问')
})