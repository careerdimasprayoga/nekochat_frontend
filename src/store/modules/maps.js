import axios from 'axios'

export default {
  state: {
    latLng: [],
    dataLatLong: [],
    userId: ''
  },
  mutations: {
    pushLatLng (state, payload) {
      // console.log(payload)
      // state.latLong = payload
    },
    pushUserId (state, payload) {
      // console.log(payload)
      state.userId = payload
    },
    pushDataLatLong (state, payload) {
      state.dataLatLong = payload
    }
  },
  actions: {
    getLatLong (context, payload) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/profile/getCordinates/${payload}`)
        .then((response) => {
          console.log(response)
          // context.commit('pushLatLng', response.data.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    patchLatLng (context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_BASE_URL}/profile/patchCordinates/${context.state.userId}`, payload)
          .then((response) => {
            resolve(response.data.msg)
          })
          .catch((error) => {
            reject(error)
          })
      })
    }
  },
  getters: {
    maybe (state) {
      return state.listRoomChat
    }
  }
}
