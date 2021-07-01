import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        pickedColor: '',
        nMessage: '',
        nReset: 'New colors',
        hBackgroundColor: null,
        nMessageColor: '#fff',
        isHard: true
    },
    actions: {
        changeValue({commit}, data) {
            commit('changeValue', data)
        },
    },
    mutations: {
        changeValue(state, data) {
            console.log('vuex.js -> mutations -> changeValue -> ' + JSON.stringify(data))
            const property = data.property
            state[property] = data.value
        },
    }
})