/*
 * @Author: cewei
 * @Date:   2018-07-09 23:39:37
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-10 00:29:16
 */
import React from 'react'
import {
	Grid,
	List
} from 'antd-mobile'



class AvatarSelect extends React.Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	render() {
		const avatarList = 'boy,woman,girl,man,bull,crab,hedgehog,koala,lemur,chick,pig,tiger,whale,zebra,hippopotamus'
			.split(',').map(cur => {
				return {
					icon: require(`../img/${cur}.png`),
					text: cur
				}
			})
		const gridHeader = this.state.text ?
			(<div>
				<span>已选择头像:</span>
				<img src={this.state.icon} style={{width:20}}/>
			</div>) : '请选择头像'
		return <div>
 			<List renderHeader={()=>gridHeader}>
 				<Grid
 				onClick={el=>{
 					this.setState(el)
 					this.props.selectAvatar(el.text)
 				}}
 				data={avatarList}
 				columnNum={5}></Grid>
 			</List>
 		</div>
	}
}

export default AvatarSelect