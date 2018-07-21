/*
 * @Author: cewei
 * @Date:   2018-07-04 13:25:07
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-10 10:51:23
 */

import axios from 'axios'
import {
	getRedirectPath
} from '../util'

const initialState = {
	user: '',
	type: '',
	msg: '',
	redirectTo: ''
}

export function user(state = initialState, action) {
	switch (action.type) {
		case 'AUTH_SUCCESS':
			return { ...state,
				...action.payload,
				msg: action.msg,
				redirectTo: getRedirectPath(action.payload)
			}
		case 'ERROR_MSG':
			return { ...state,
				msg: action.msg
			}
		case 'LOAD_DATA':
			return { ...state,
				...action.payload
			}
		case 'CLEAR_MSG':
			return { ...state,
				msg: action.msg
			}
		default:
			return state
	}
}

export function authSuccess(data) {
	return {
		type: 'AUTH_SUCCESS',
		payload: data
	}
}

export function errorMsg(msg) {
	return {
		type: 'ERROR_MSG',
		msg: msg
	}
}
export function loadData(data) {
	return {
		type: 'LOAD_DATA',
		payload: data
	}
}
export function login({
	user,
	pwd
}) {
	return (dispatch, getState) => {
		if (user == null) {
			dispatch(errorMsg('请输入用户名'))
		} else if (pwd == null) {
			dispatch(errorMsg('请输入密码'))
		} else {
			axios.post('/user/login', {
				user,
				pwd
			}).then(res => {
				if (res.status == 200 && res.data.code == 0) {
					dispatch(authSuccess(res.data.data))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
		}
	}
}
export function clearMsg() {
	return {
		type: 'CLEAR_MSG',
		msg: ''
	}
}
export function register({
	user,
	pwd,
	repeatPwd,
	type
}) {
	//表单信息验证
	if (!user) {
		return errorMsg('请输入用户名')
	}
	if (!pwd) {
		return errorMsg('请输入密码')
	}
	if (pwd.length < 6) {
		return errorMsg('密码长度不能小于6位')
	}
	if (!repeatPwd) {
		return errorMsg('请再次输入密码')
	}
	if (pwd !== repeatPwd) {
		return errorMsg('两次输入密码不一致')
	}
	return dispatch => {
		axios.post('/user/register', {
			user,
			pwd,
			type
		}).then(res => {
			if (res.status === 200 && res.data.code === 0) {
				dispatch(authSuccess({
					user,
					pwd,
					type
				}))
			} else {
				dispatch(errorMsg(res.data.msg))
			}
		})
	}
}

export function update(data) {
	return dispatch => {
		axios.post('/user/update', data)
			.then(res => {
				if (res.status === 200 && res.data.code === 0) {
					dispatch(authSuccess(res.data.data))
				} else {
					dispatch(errorMsg(res.data.msg))
				}
			})
	}
}