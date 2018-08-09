import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        firstValue: '',
        secondValue: ''
    },
    mutations: {
        increment: (state, data) => state.firstValue = data,
        decrement: (state, data) => state.secondValue = data,
    }
})