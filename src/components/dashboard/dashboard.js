/*
 * @Author: cewei
 * @Date:   2018-07-10 16:06:32
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-10 23:32:41
 */

import React from 'react'
import {
	NavBar
} from 'antd-mobile'
import Boss from '../boss/boss'
import {
	Route,
	Switch
} from 'react-router-dom'
import {
	connect
} from 'react-redux'
import NavFooter from '../navfooter/navfooter'
@connect(
	state => state.user, {}
)
class Dashboard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}
	render() {
		const pathname = this.props.location.pathname
		const type = this.props.type
		const navList = [{
			path: '/boss',
			text: '牛人',
			icon: 'boss',
			title: '求职者列表',
			component: '12',
			hide: type === 'genius'
		}, {
			path: '/genius',
			text: 'boss',
			icon: 'job',
			title: 'BOSS列表',
			component: '12',
			hide: type === 'boss'
		}, {
			path: '/msg',
			text: '消息',
			icon: 'msg',
			title: '消息列表',
			component: 'Msg',
		}, {
			path: '/me',
			text: '我',
			icon: 'user',
			title: '个人中心',
			component: 'User',
		}]
		return <div>
 			// <NavBar>{navList.find(cur => cur.path === pathname).title}</NavBar>
 			<div>
				<Switch>
					<Route path='/boss' component={Boss}></Route>
				</Switch>
			</div>
			<NavFooter navList={navList}></NavFooter>
 		</div>
	}
}

export default Dashboard