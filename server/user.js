/*
 * @Author: cewei
 * @Date:   2018-07-07 10:44:03
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-10 10:47:04
 */

const express = require('express')
const Router = express.Router()
const utils = require('utility')

const models = require('./model')
const User = models.getModel('user')
//MD5+salt
function md5Pwd(pwd) {
	const salt = 'dongcewei!@#%#@@@@!!!dsfsdacmggr&'
	return utils.md5(utils.md5(salt + pwd))
}

Router.get('/remove', function(req, res) {
	User.remove({}, function(err, doc) {
		if (!err) {
			return res.json({
				code: 0
			})
		}
	})
})
//注册，
// 验证用户名是否在数据库中，
// 密码md5加密后存入数据库，
// 将_id作为cookie存入cookie数据库
Router.post('/register', function(req, res) {
	const {
		user,
		pwd,
		type
	} = req.body

	User.findOne({
		user
	}, function(err, doc) {
		if (doc) {
			return res.json({
				code: 1,
				msg: '用户名已存在'
			})
		}
		const userModel = new User({
			user: user,
			pwd: md5Pwd(pwd),
			type: type
		})

		userModel.save(function(err, doc) {
			if (err) {
				return res.json({
					code: 1,
					msg: '哪里不对了~~~'
				})
			}
			const {
				user,
				type,
				_id
			} = doc
			res.cookie('userid', _id)
			return res.json({
				code: 0,
				data: {
					user,
					type,
					_id
				}
			})

		})
	})

})

//登录
Router.post('/login', function(req, res) {
	const {
		pwd,
		user
	} = req.body

	User.findOne({
		user,
		pwd: md5Pwd(pwd)
	}, function(err, doc) {
		if (!doc) {
			return res.json({
				code: 1,
				msg: '用户名或者密码错误'
			})
		}

		res.cookie('userid', doc._id)
		return res.json({
			code: 0,
			data: doc
		})
	})
})

Router.get('/list', function(req, res) {
	User.find({}, function(err, doc) {
		if (doc) {
			return res.json({
				code: 0,
				data: doc
			})
		}
	})
})

Router.get('/info', function(req, res) {
	const {
		userid
	} = req.cookies

	if (!userid) {
		return res.json({
			code: 1,
			msg: '您还没有登录'
		})
	}

	User.findOne({
		_id: userid
	}, function(err, doc) {
		if (err) {
			return res.json({
				code: 1,
				msg: '哪里不对了~~~'
			})
		}
		if (!doc) {
			return res.json({
				code: 1,
				msg: '您的信息已经过期，请重新登录'
			})
		}

		return res.json({
			code: 0,
			data: doc
		})


	})
})
Router.post('/update', function(req, res) {
	const {
		userid
	} = req.cookies
	if (!userid) {
		return res.json({
			code: 1
		})
	}

	const body = req.body

	User.findByIdAndUpdate(userid, body, function(err, doc) {
		const data = {
			user: doc.user,
			type: doc.type,
			...body
		}

		return res.json({
			code: 0,
			data: data
		})
	})
})
module.exports = Router