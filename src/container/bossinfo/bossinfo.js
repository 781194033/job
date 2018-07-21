/*
 * @Author: cewei
 * @Date:   2018-07-09 14:40:57
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-10 14:07:42
 */
import React from 'react'
import {
	Redirect
} from 'react-router-dom'
import {
	NavBar,
	InputItem,
	TextareaItem,
	Button,
	WhiteSpace
} from 'antd-mobile'
import AvatarSelect from '../../components/avatar-select/avatarSelect'
import {
	connect
} from 'react-redux'
import {
	update
} from '../../redux/user.redux'

@connect(
	state => state.user, {
		update
	}
)
class BossInfo extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			title: ''
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSave = this.handleSave.bind(this)
	}
	handleChange(key, val) {
		this.setState({
			[key]: val
		})
	}
	handleSave() {
		this.props.update(this.state)
	}
	render() {
		const pathname = this.props.location.pathname
		const redirectTo = this.props.redirectTo
		return <div>
		{redirectTo&&redirectTo!==pathname?<Redirect to={this.props.redirectTo}></Redirect>:null}
			<NavBar mode="dark">请完善您的信息</NavBar>
			<AvatarSelect
			selectAvatar={(imageName)=>{
				this.setState({
					avatar : imageName
				})
			}}></AvatarSelect>
			<InputItem
			onChange={v=>this.handleChange('title',v)}
			>招聘职位:</InputItem>
			<InputItem
			onChange={v=>this.handleChange('company',v)}
			>公司名称:</InputItem>
			<InputItem
			onChange={v=>this.handleChange('money',v)}
			>职位薪资:</InputItem>
			<TextareaItem
			onChange={v=>this.handleChange('desc',v)}
			rows={3}
			autoHeight={true}
			title='职位要求:'></TextareaItem>
			<WhiteSpace/>
			<Button
			onClick={this.handleSave}
			type='primary'>保存</Button>
		</div>
	}
}

export default BossInfo