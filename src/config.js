/*
 * @Author: cewei
 * @Date:   2018-07-10 14:52:21
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-10 15:00:36
 */
import axios from 'axios'
import {
	Toast
} from 'antd-mobile'

// 拦截请求
axios.interceptors.request.use(function(config) {
	Toast.loading('加载中', 0)
	return config
})

// 拦截相应

axios.interceptors.response.use(function(config) {
	Toast.hide()
	return config
})