import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import state from '@/store/state'
import actions from '@/store/action'
import mutations from '@/store/mutation'



let store = new Vuex.Store({
	actions,mutations,state,
})
export default store;