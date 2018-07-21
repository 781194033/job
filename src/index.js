import React from 'react'
import ReactDom from 'react-dom'
import {
	Provider
} from 'react-redux'
import {
	BrowserRouter,
	Switch,
	Route
} from 'react-router-dom'
import {
	createStore,
	applyMiddleware,
	compose,
	combineReducers
} from 'redux'
import thunk from 'redux-thunk'
import Login from './container/login/login'
import Rrgister from './container/register/register'
import {
	user
} from './redux/user.redux'
import Dashboard from './components/dashboard/dashboard'
import Auth from './components/authRoute/authRoute'
import BossInfo from './container/bossinfo/bossinfo'
import GeniusInfo from './container/geniusinfo/geniusinfo'
import 'antd-mobile/dist/antd-mobile.css'
import './index.css'
import './config'

const store = createStore(combineReducers({
	user
}), compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f))

ReactDom.render(
	<Provider store={store}>
<BrowserRouter>
	<div>
		<Auth></Auth>
		<Switch>
			<Route path='/login' component={Login}></Route>
			<Route path='/register' component={Rrgister}></Route>
			<Route path='/bossinfo' component={BossInfo}></Route>
			<Route path='/geniusinfo' component={GeniusInfo}></Route>
			<Route component={Dashboard}></Route>
		</Switch>
	</div>
</BrowserRouter>
</Provider>, document.getElementById('root'))