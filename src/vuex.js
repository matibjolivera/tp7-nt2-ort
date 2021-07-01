import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pickedColor: '',
        nMessage: '',
        nReset: 'New colors'
    },
    actions: {
        changeValue({commit}, data) {
            commit('changeValue', data)
        },
    },
    mutations: {
        changeValue(state, data) {
            const property = data.property
            state[property] = data.value
        },
    }
})