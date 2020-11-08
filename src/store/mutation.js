import * as types from './types.js'

let mutations = {
	[types.UPDATE_ISTHREETAB] : (state , payload) => {
		state.threeTabStatus = payload
	},
	[types.UPDATE_SERARCHLIST] : (state , payload) => {
		state.serarchList = payload
	}
}

export default mutations;