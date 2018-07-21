/*
 * @Author: cewei
 * @Date:   2018-07-06 15:15:17
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-06 16:47:59
 */

const mongoose = require('mongoose')

const DB_URL = 'mongodb://localhost:27017/BOSS'

mongoose.connect(DB_URL)

mongoose.connection.on('open', function() {
	console.log('数据库连接成功')
})

mongoose.connection.on('error', function(err) {
	console.log('数据库连接失败：' + err)
})



const user = {
	user: {
		type: String,
		require: true
	},
	pwd: {
		type: String,
		require: true
	},
	type: {
		type: String,
		require: true
	},
	avatar: {
		type: String
	},
	desc: {
		type: String
	},
	title: {
		type: String
	},
	company: {
		type: String
	},
	money: {
		type: String
	}
}

//定义userSchema 
const UserSchema = new mongoose.Schema(user)
//将userSchema发布为Model
mongoose.model('user', UserSchema)

module.exports = {
	getModel: function(name) {
		return mongoose.model(name)
	}
}