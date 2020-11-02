import axios from 'axios'

export default {
  state: {
    latLng: [],
    dataLatLong: []
  },
  mutations: {
    pushLatLng (state, payload) {
      console.log(payload)
      // state.latLong = payload
    },
    pushDataLatLong (state, payload) {
      state.dataLatLong = payload
    }
  },
  actions: {
    getLatLong (context, payload) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/chat_room/${payload}`)
        .then((response) => {
          context.commit('pushListRoomChat', response.data.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    postLatLong (context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_BASE_URL}/chat_room/send_chat`, payload)
          .then((response) => {
            console.log(response)
            resolve(response)
          })
          .catch((error) => {
            console.log(error)
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
