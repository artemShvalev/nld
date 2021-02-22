import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      data: () => ({ drawer: false }),
    },
    mutations: {},
    actions: {
      drawer(context) {
        context.commit('drawer')
      },
    },
    getters: {},
  })
}

export default createStore
