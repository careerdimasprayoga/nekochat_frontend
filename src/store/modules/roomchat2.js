import axios from 'axios'

export default {
  state: {
    listRoomChat: [],
    inRoomChat: []
  },
  mutations: {
    pushListRoomChat (state, payload) {
      state.listRoomChat = payload
    },
    pushInRoomChat (state, payload) {
      state.inRoomChat = payload
    }
  },
  actions: {
    getListRoomChat (context, payload) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/chat_room/${payload}`)
        .then((response) => {
          context.commit('pushListRoomChat', response.data.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    getInRoomChat (context, payload) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/chat_room/getInChat/${payload}`)
        .then((response) => {
          console.log(response)
          context.commit('pushInRoomChat', response.data.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    },
    postChat (context, payload) {
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
    dataListRoomChat (state) {
      return state.listRoomChat
    },
    dataInRoomChat (state) {
      return state.inRoomChat
    }
  }
}
