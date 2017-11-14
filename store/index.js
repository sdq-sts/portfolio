import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      route: null,
      bodyHasVScrollBar: true,
      showRedBar: true,
      showProjectDetails: false,
      currentDetails: null
    }
  })
}

export default store
