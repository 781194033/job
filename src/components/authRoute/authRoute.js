/*
 * @Author: cewei
 * @Date:   2018-07-07 17:02:32
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-07 21:39:14
 */

import React from 'react'
import {
	withRouter
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import axios from 'axios'
import {
	loadData
} from '../../redux/user.redux'

//用来验证是否有登录信息，验证用户访问哪个页面，进行跳转
@withRouter
@connect(
	state => state, {
		loadData
	}
)
class Auth extends React.Component {
	componentDidMount() {
		//是否当前页是登录或者注册页，如果是，就不执行跳转
		const pathname = this.props.location.pathname
		if (pathname === '/login' || pathname === '/register') {
			return null
		}

		//验证是否有用户信息，如果有就不执行跳转，否则就跳转到登陆页
		axios.get('/user/info')
			.then(res => {
				if (res.status === 200 && res.data.code === 0) {
					loadData(res.data)
				} else {
					this.props.history.push('/login')
				}
			})

	}
	render() {
		return null
	}
}


export default Auth