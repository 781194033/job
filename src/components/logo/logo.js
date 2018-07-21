/*
 * @Author: cewei
 * @Date:   2018-07-03 20:57:55
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-03 21:12:45
 */

import React, {
	Component
} from 'react'
import logo from './LOGO.jpg'
import './logo.css'
class Logo extends Component {
	render() {
		return <div className="logo-container">
 			<img src={logo} alt="logo"/>
 		</div>
	}
}

export default Logo