import axios from 'axios'

export default {
  state: {
    roomchat: []
  },
  mutations: {
    data_roomchat (state, payload) {
      state.roomchat = payload.data
    }
  },
  actions: {
    act_get_roomchat (context, payload) {
      const mydata = {
        id_user_login: payload
      }
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/chat_room`, mydata)
        .then((response) => {
          context.commit('data_roomchat', response.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  },
  getters: {
    get_roomchat (state) {
      return state.roomchat
    }
  }
}
