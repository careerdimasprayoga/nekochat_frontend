import axios from 'axios'

export default {
  state: {
    listRoomChat: [],
    inRoomChat: [],
    idUserLogin: '',
    roomEmty: false,
    dataSearchUser: ''
  },
  mutations: {
    pushListRoomChat (state, payload) {
      state.listRoomChat = payload
    },
    pushInRoomChat (state, payload) {
      state.inRoomChat = payload
    },
    pushidUserLogin (state, payload) {
      state.idUserLogin = payload
    },
    dataRoomEmpty (state, payload) {
      state.roomEmty = payload
    },
    pushResultSearch (state, payload) {
      state.dataSearchUser = payload
    }
  },
  actions: {
    getListRoomChat (context, payload) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/chat_room/${payload}`)
        .then((response) => {
          context.commit('dataRoomEmpty', false)
          console.log(response)
          context.commit('pushListRoomChat', response.data.data)
        })
        .catch((error) => {
          context.commit('dataRoomEmpty', true)
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
    },
    patchProfile (context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .patch(`${process.env.VUE_APP_BASE_URL}/profile/edit_profile/${context.state.idUserLogin}`, payload)
          .then((response) => {
            resolve(response.data.msg)
          })
          .catch((error) => {
            reject(error.data.msg)
          })
      })
    },
    searchAddUser (context, payload) {
      axios
        .get(`${process.env.VUE_APP_BASE_URL}/users/search/${payload}`)
        .then((response) => {
          context.commit('pushResultSearch', response.data.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    actionAddUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .post(`${process.env.VUE_APP_BASE_URL}/users/addFriendChat`, payload)
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
    },
    getterRoomEmpty (state) {
      return state.roomEmty
    },
    getterSeachUser (state) {
      return state.dataSearchUser
    }
  }
}
