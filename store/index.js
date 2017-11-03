import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      route: null
    },
    mutations: {
      getRoute (state) {
        state.route = 'ejnrgo'
      }
    }
  })
}

export default store
