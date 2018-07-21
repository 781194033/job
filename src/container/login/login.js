/*
 * @Author: cewei
 * @Date:   2018-07-02 14:37:26
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-09 14:20:21
 */
import React from 'react'
import {
	WingBlank,
	InputItem,
	List,
	WhiteSpace,
	Button
} from 'antd-mobile'
import Logo from '../../components/logo/logo'
import {
	connect
} from 'react-redux'
import {
	login,
	clearMsg
} from '../../redux/user.redux'
import {
	Redirect
} from 'react-router-dom'
@connect(
	state => state.user, {
		login,
		clearMsg
	}
)
class Login extends React.Component {
	constructor(props) {
		super(props)
		this.handleRegister = this.handleRegister.bind(this)
		this.handleClick = this.handleClick.bind(this)
		this.state = {}
	}
	handleRegister() {
		this.props.history.push('/register')
		this.props.clearMsg()
	}
	handleClick() {
		this.props.login(this.state)
	}
	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	render() {
		return <div>
			{this.props.redirectTo?<Redirect to={this.props.redirectTo}></Redirect>:null}
			<Logo></Logo>
 			<WingBlank>
 				{this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
 				<List>
 					<InputItem
 					onChange={v=>this.handleChange('user',v)}
 					placeholder="请输入用户名"></InputItem>
 					<InputItem
 					onChange={v=>this.handleChange('pwd',v)}
 					placeholder="请输入密码"
 					type="password"></InputItem>
				</List>
				<WhiteSpace/>
				<Button 
				onClick={this.handleClick}
				type="primary">登录</Button>
				<WhiteSpace></WhiteSpace>
				<Button 
				onClick={this.handleRegister}
				type="primary">注册</Button>
 			</WingBlank>
 		</div>
	}
}

export default Login