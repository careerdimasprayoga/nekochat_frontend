import axios from 'axios'

export default {
  state: {
    roomchat: []
  },
  mutations: {
    data_roomchat(state, payload) {
      // console.log(payload.data)
      state.roomchat = payload.data
    }
  },
  actions: {
    act_get_roomchat(context, payload) {
      const mydata = {
        id_user_login: payload
      }
      axios
        .post(`${process.env.VUE_APP_BASE_URL}/chat_room`, mydata)
        .then((response) => {
          // console.log(response)
          context.commit('data_roomchat', response.data)
        })
        .catch((error) => {
          console.log(error.response)
        })
    }
  },
  getters: {
    get_roomchat(state) {
      // console.log(state.roomchat)
      return state.roomchat
    }
  }
}
