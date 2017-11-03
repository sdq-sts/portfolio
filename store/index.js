import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      route: null
    }
  })
}

export default store
