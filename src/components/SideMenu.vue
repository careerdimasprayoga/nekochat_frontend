<template>
  <b-container fluid>
    <b-row>
      <b-col xl="12" class="header">
        <h3 style="display: inline">Neko Chat</h3>
        <b-dropdown
          variant="transparent"
          class="m-2 my-dropdown"
          no-caret
          size="sm"
          style="margin-top: -5px !important; float: right"
        >
          <template slot="button-content">
            <img
              class="img-fluid p-2"
              src="../assets/icons/Menu.png"
              width="40px"
            />
          </template>
          <b-dropdown-item href="#" v-b-toggle.sidebar-1
            >Setting</b-dropdown-item
          >
          <b-dropdown-item href="#">Contact</b-dropdown-item>
          <b-dropdown-item href="#" v-b-modal.modalAddContact
            >Add Contact</b-dropdown-item
          >
          <b-dropdown-item href="#">Calls</b-dropdown-item>
          <b-dropdown-item href="#">Save Message</b-dropdown-item>
          <b-dropdown-item href="#">Invite Friends</b-dropdown-item>
          <b-dropdown-item href="#">Telegram FAQ</b-dropdown-item>
          <b-dropdown-item @click="actionLogout()">Logout</b-dropdown-item>
        </b-dropdown>
        <b-modal id="modalAddContact" hide-footer title="Add Contact">
          <form @submit.prevent="searchAddUser()">
            <b-form-input
              class="inputSearch text-center"
              v-model="search_email"
              placeholder="Search email"
            ></b-form-input>
          </form>
          <b-row>
            <b-col sm="12" v-if="this.getterDataSearchUser.length >= 1">
              <b-card
                v-for="(item, index) in getterDataSearchUser"
                v-bind:img-src="`${url}` + `/${item.image}`"
                img-alt="Card image"
                img-left
                :key="index"
                class="mb-3 mt-4 ml-3 mr-3"
              >
                <b-card-text class="ml-3" style="margin-bottom: 5px">
                  {{ item.name }}
                </b-card-text>
                <b-button
                  variant="info"
                  size="sm"
                  class="ml-3"
                  @click="addFriend(item)"
                >
                  <b-icon icon="person-plus-fill"></b-icon>
                </b-button>
                <b-button variant="danger" size="sm" class="ml-2">
                  <b-icon icon="person-x-fill"></b-icon>
                </b-button>
              </b-card>
            </b-col>
          </b-row>
        </b-modal>
        <b-sidebar id="sidebar-1" title="Profile" style="width: 20px" shadow>
          <div class="px-3 py-2">
            <b-img
              v-bind:src="`${url}` + `/${this.getterUserLogin.image}`"
              fluid
              class="styleSideBar"
            ></b-img>
            <br />
            <b-form v-on:submit.prevent="uploadImage">
              <label for="file">
                <b-icon
                  icon="camera"
                  style="
                    color: #7952b3;
                    margin-left: 130px;
                    margin-top: 5px;
                    margin-bottom: -5px;
                  "
                  font-scale="2"
                ></b-icon>
                <input
                  id="file"
                  type="file"
                  @change="handleFile"
                  style="display: none"
                  name="image"
                  accept="image/gif,image/jpeg,image/jpg,image/png"
                  multiple=""
                  data-original-title="upload photos"
                />
              </label>
            </b-form>
            <h4 class="text-center">{{ this.getterUserLogin.name }}</h4>
            <p class="text-center">@{{ this.getterUserLogin.username }}</p>
            <h6 class="mt-4 ml-2">Phone Number</h6>
            <form @submit.prevent="functEditPhone()">
              <b-form-input
                class="inputSidebar"
                type="number"
                v-model="editProfile.phone"
              ></b-form-input>
            </form>
            <hr />
            <h6 class="ml-2">Username</h6>
            <form @submit.prevent="functEditPhone()">
              <b-form-input
                class="inputSidebar"
                v-model="editProfile.username"
              ></b-form-input>
            </form>
            <!-- <p>@{{ this.getterUserLogin.username }}</p> -->
            <hr />
            <h6 style="display: inline-block" class="ml-2">Bio</h6>
            <form @submit.prevent="functEditPhone()">
              <b-form-input
                class="inputSidebar"
                v-model="editProfile.bio"
              ></b-form-input>
            </form>
            <!-- <p>I am senior frontend developer bro from microsoft</p> -->
            <!-- <b-icon icon="pencil-fill" class="ml-3"></b-icon> -->
            <hr />
            <h5 class="mb-3">Location</h5>
            <GmapMap
              :center="{ lat: this.latitute, lng: this.longtitute }"
              :zoom="15"
              map-type-id="terrain"
              style="width: 270px; height: 270px"
            >
              <GmapMarker
                :position="{ lat: this.latitute, lng: this.longtitute }"
                :clickable="true"
                :dragable="true"
              />
            </GmapMap>
          </div>
        </b-sidebar>
      </b-col>
      <b-col xl="12" class="header_search">
        <b-form-input
          placeholder="Type your message..."
          style="display: inline; width: 200px"
        ></b-form-input>
        <b-dropdown
          variant="transparent"
          class="m-2"
          no-caret
          size="sm"
          style="margin-top: -5px !important; float: right"
        >
          <template slot="button-content">
            <img
              class="img-fluid p-2"
              src="../assets/icons/Plus.png"
              width="40px"
            />
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
        </b-dropdown>
      </b-col>
      <b-col xl="12" class="menu-wrapper">
        <b-button
          size="md"
          class="btn-custom-selected"
          style="margin-left: 30px"
          >All</b-button
        >
        <b-button size="md" class="btn-custom" style="margin-left: 5px"
          >Read</b-button
        >
        <b-button size="md" class="btn-custom" style="margin-left: 5px"
          >Unread</b-button
        >
      </b-col>
      <b-col xl="12" class="roomchat-wrapper" id="style-8">
        <p v-if="this.getterDataRoomEmpty === true" class="text-center mt-5">
          No contact
        </p>
        <b-card
          v-else
          v-for="(item, index) in getterRoomChat"
          v-bind:img-src="`${url}` + '/' + item.image"
          img-alt="Card image"
          img-left
          class="mb-3 mt-1 sidePeople"
          :key="index"
          @click="clickInRoomChat(item)"
        >
          <p class="styleName">
            {{ item.name }}
            <em class="styleTime">15:20</em>
          </p>
          <p style="margin-left: 10px; line-height: 0px; color: #7e98df">
            Online
          </p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import io from 'socket.io-client'

export default {
  name: 'RoomChat',
  data() {
    return {
      socket: io('http://127.0.0.1:3009'),
      id_login: {
        id_user_login: null
      },
      editPhone: false,
      url: process.env.VUE_APP_BASE_URL,
      show: false,
      latitute: 0,
      longtitute: 0,
      oldRoom: '',
      editProfile: {
        phone: '',
        username: '',
        bio: '',
        image: {}
      },
      search_email: ''
    }
  },
  computed: {
    ...mapGetters({
      getterUserLogin: 'data_user',
      getterRoomChat: 'dataListRoomChat',
      getterDataInRoomChat: 'dataInRoomChat',
      getterDataRoomEmpty: 'getterRoomEmpty',
      getterDataSearchUser: 'getterSeachUser'
    })
  },
  methods: {
    ...mapActions({
      actionGetListRoomChat: 'getListRoomChat',
      actionInRoomChat: 'getInRoomChat',
      actionPushLatLng: 'patchLatLng',
      actionLogout: 'logout',
      actionPatchProfile: 'patchProfile',
      actionSearchAddUser: 'searchAddUser',
      actionAddFriend: 'actionAddUser'
    }),
    ...mapMutations({
      mutationPushCordinates: 'pushLatLng',
      pushUserId: 'pushUserId',
      mutationEditUserLogin: 'pushidUserLogin'
    }),
    async addFriend(data) {
      try {
        const form = {
          id_sender: this.getterUserLogin.id,
          id_receive: data.id
        }
        await this.actionAddFriend(form)
        await this.actionGetListRoomChat(this.getterUserLogin.id)
      } catch (error) {
        console.log(error)
      }
    },
    searchAddUser() {
      this.actionSearchAddUser(this.search_email)
    },
    uploadImage() {
      const data = new FormData()
      data.append('image', this.form.image)
      this.actionPatchProfile(data)
        .then((response) => {
          this.$swal({
            position: 'center',
            icon: 'success',
            title: response,
            showConfirmButton: true,
            timer: 2100
          })
        })
        .catch((error) => {
          this.$swal({
            position: 'center',
            icon: 'error',
            title: error,
            showConfirmButton: false,
            timer: 2500
          })
        })
      this.editProfile = []
    },
    handleFile(event) {
      this.editProfile.image = event.target.files[0]
      const data = new FormData()
      data.append('image', this.editProfile.image)
      this.mutationEditUserLogin(this.getterUserLogin.id)
      this.actionPatchProfile(data)
        .then((response) => {
          this.$swal({
            position: 'center',
            icon: 'success',
            title: response,
            showConfirmButton: true,
            timer: 2100
          })
        })
        .catch((error) => {
          this.$swal({
            position: 'center',
            icon: 'error',
            title: error,
            showConfirmButton: false,
            timer: 2500
          })
        })
      this.editProfile = []
    },
    clickInRoomChat(idRoom) {
      if (this.oldRoom) {
        // console.log('Sudah pernah klik room ' + this.oldRoom)
        // console.log('mau masuk ke room ' + idRoom.id_roomchat)
        this.socket.emit('changeRoom', {
          oldRoom: this.oldRoom,
          newRoom: idRoom.id_roomchat
        })
        this.oldRoom = idRoom.id_roomchat
        this.actionInRoomChat(idRoom.id_roomchat)
      } else {
        // console.log('Belum pernah klik room ' + this.oldRoom)
        // console.log('Dan akan masuk ke room ' + idRoom.id_roomchat)
        this.oldRoom = idRoom.id_roomchat
        this.actionInRoomChat(idRoom.id_roomchat)
      }
      // this.actionInRoomChat(idRoom.id_roomchat)
      // this.socket.emit('changeRoom', {oldRoom: this.oldRoom, newRoom: idRoom.id_roomchat})
    },
    functEditPhone() {
      this.mutationEditUserLogin(this.getterUserLogin.id)
      this.actionPatchProfile(this.editProfile)
        .then((response) => {
          this.$swal({
            position: 'center',
            icon: 'success',
            title: response,
            showConfirmButton: true,
            timer: 2100
          })
        })
        .catch((error) => {
          this.$swal({
            position: 'center',
            icon: 'error',
            title: error,
            showConfirmButton: false,
            timer: 2500
          })
        })
    }
  },
  async created() {
    await this.actionGetListRoomChat(this.getterUserLogin.id)
    await this.$getLocation().then((coordinates) => {
      this.latitute = coordinates.lat
      this.longtitute = coordinates.lng
    })
    const dataCordinates = {
      lat: this.latitute,
      lng: this.longtitute
    }
    await this.pushUserId(this.getterUserLogin.id)
    await this.actionPushLatLng(dataCordinates)
    this.editProfile.phone = this.getterUserLogin.phone
    this.editProfile.username = this.getterUserLogin.username
    this.editProfile.bio = this.getterUserLogin.bio
  }
}
</script>

<!-- ======================================== CSS ======================================== -->
<style scoped>
.header {
  color: #7e98df;
  margin-top: 25px;
  position: relative;
  /* background-color: chartreuse; */
}
.header_search {
  margin-top: 10px;
  /* background-color: chartreuse; */
}
.styleName {
  margin-left: 10px;
  line-height: 20px;
  font-weight: bold;
  margin-top: 8px;
}
.styleTime {
  float: right;
  font-style: normal;
  font-weight: normal;
  color: #848484;
}
input {
  border-radius: 10px;
  width: 220px;
  height: 40px;
}
.menu-wrapper {
  width: 300px;
  margin-top: 20px;
  /* background-color: red; */
}
.btn-custom {
  background-color: transparent;
  color: black;
  border-radius: 15px;
  border: none;
}
.btn-custom:hover {
  background-color: #7e98df;
  color: #ffffff;
}
.btn-custom:focus {
  background-color: #7e98df;
  color: #ffffff;
}
.btn-custom-selected {
  background-color: #7e98df;
  color: #ffffff;
  border-radius: 15px;
  border: none;
}
.btn-custom-selected:hover {
  background-color: transparent;
  color: black;
}
.roomchat-wrapper {
  margin-top: 25px;
  height: 420px;
  /* background-color: yellow; */
  overflow: auto;
}
::-webkit-scrollbar {
  width: 4px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #7e98df;
  border-radius: 30px;
}
::-webkit-scrollbar-thumb:hover {
  background: #7e98df;
}
.chat-wrapper {
  height: 65px;
  width: 200px;
  background-color: greenyellow;
}
.card {
  border: none;
}
.card img {
  max-width: 65px;
  max-height: 65px;
  border-radius: 20px;
}
.card-body {
  /* Ubah card style bootstrap */
  padding: 0;
}
.text-color {
  color: #7e98df;
}
.mt-minus-10 {
  margin-top: -10px;
}
.styleIcon {
  margin-left: 240px;
  margin-top: -60px !important;
}
.styleSideBar {
  border-radius: 40px;
  width: 130px;
  height: 130px;
  margin-left: 80px;
  margin-top: 5px;
}
.inputSidebar {
  height: 30px;
  width: 280px;
  border: none;
  background-color: #fafafa;
}
.inputSearch {
  height: 30px;
  width: 280px;
  margin: auto;
}
.sidePeople:hover {
  cursor: pointer;
}
.my-dropdown .dropdown-menu {
  background-color: green !important;
}
.my-dropdown .dropdown-menu .dropdown-item {
  background-color: green !important;
}
.my-dropdown > button {
  background-color: green !important;
}
</style>
