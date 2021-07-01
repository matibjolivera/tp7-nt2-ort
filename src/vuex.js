import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pickedColor: '',
        nMessage: ''
    },
    actions: {
        changeNMessage({commit}, message) {
            console.log('vuex.js -> actions -> changeNMessage()')
            commit('changeNMessage', message)
        },
    },
    mutations: {
        changeNMessage(state, message) {
            console.log('vuex.js -> mutations -> changeNMessage()')
            state.nMessage = message
        }
    }
})