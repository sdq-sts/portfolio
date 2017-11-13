import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      route: null,
      bodyHasVScrollBar: true,
      showRedBar: true,
      showProjectDetails: false
    }
  })
}

export default store
