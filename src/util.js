/*
 * @Author: cewei
 * @Date:   2018-07-09 07:20:10
 * @Last Modified by:   cewei
 * @Last Modified time: 2018-07-09 07:34:25
 */

export function getRedirectPath({
	type,
	avatar
}) {
	let url = (type === 'boss') ? '/boss' : '/genius'

	if (!avatar) {
		url += 'info'
	}

	return url
}