/*
 * @Author: cewei
 * @Date:   2018-07-04 10:39:18
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-09 14:30:58
 */

import React from 'react'
import Logo from '../../components/logo/logo'
import {
	WingBlank,
	List,
	WhiteSpace,
	InputItem,
	Button,
	Radio
} from 'antd-mobile'
import {
	connect
} from 'react-redux'
import {
	register
} from '../../redux/user.redux'
import {
	Redirect
} from 'react-router-dom'
@connect(
	state => state.user, {
		register
	}
)
class Register extends React.Component {
	constructor(props) {
		super(props)
		this.handleChange = this.handleChange.bind(this)
		this.handleRegister = this.handleRegister.bind(this)
		this.state = {}
	}
	componentDidMount() {
		this.handleChange('type', 'boss')
	}
	handleRegister() {
		this.props.register(this.state)
	}
	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	render() {
		const RadioItem = Radio.RadioItem
		return <div>
			{this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
 			<Logo></Logo>
 			<WingBlank>
 				{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
 				<List>
 					<InputItem
 					onChange={v=>this.handleChange('user',v)}>用户名:</InputItem>
 					<InputItem
 					onChange={v=>this.handleChange('pwd',v)}
 					type="password">密码:</InputItem>
 					<InputItem
 					onChange={v=>this.handleChange('repeatPwd',v)}
 					type="password">确认密码:</InputItem>
				</List>
				<WhiteSpace/>
				<RadioItem
				onClick={v=>this.handleChange('type','boss')}
				checked={this.state.type==='boss'}>BOSS</RadioItem>
				<RadioItem
				onClick={v=>this.handleChange('type','genius')}
				checked={this.state.type==='genius'}>求职</RadioItem>
				<WhiteSpace></WhiteSpace>
				<Button
				onClick={this.handleRegister}
				type="primary">注册</Button>
 			</WingBlank>
 		</div>
	}
}

export default Register