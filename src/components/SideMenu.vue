<template>
  <b-container fluid>
    <b-row>
      <b-col xl="12" class="header">
        <h3 style="display: inline">Neko Chat</h3>
        <img
          src="../assets/icons/Menu.png"
          v-b-toggle.sidebar-1
          class="styleIcon"
        />
        <b-sidebar id="sidebar-1" title="Profile" shadow>
          <div class="px-3 py-2">
            <b-img
              v-bind:src="`${url}` + '/hibiki.jpg'"
              fluid
              class="styleSideBar"
            ></b-img>
            <h4 class="text-center mt-3">Dimas Prayoga</h4>
            <p class="text-center">@Dimasu</p>
            <h5>Account</h5>
            <p v-if="editPhone === false">081385394637</p>
            <input
              v-else
              type="text"
              value="081385394637"
              class="inputSidebar"
            />
            <p
              v-if="editPhone === false"
              class="mb-4 text-color mt-minus-10"
              @click="changeEditPhone(true)"
            >
              Tap to change phone number
            </p>
            <b-button
              variant="primary"
              class="ml-2 mb-1"
              size="sm"
              v-else
              @click="changeEditPhone(false)"
              >Save</b-button
            >
            <hr />
            <p class="font-weight-bold">@Dimasu</p>
            <p style="margin-top: -15px">Username</p>
            <hr />
            <p class="font-weight-bold">
              I am senior frontend developer bro from microsoft
            </p>
            <p style="margin-top: -15px">Bio</p>
            <hr />
            <h5 class="mb-3">Location</h5>
            <GmapMap
              :center="{ lat: -6.372518, lng: 106.5835572 }"
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
          style="display: inline"
        ></b-form-input>
        <img
          src="../assets/icons/Plus.png"
          style="margin-left: 20px; margin-top: -5px"
        />
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
        <b-card
          v-for="(item, index) in get_roomchat"
          v-bind:img-src="`${url}` + '/' + item.image"
          img-alt="Card image"
          img-left
          class="mb-3 mt-1"
          :key="index"
        >
          <p
            style="
              margin-left: 10px;
              line-height: 20px;
              font-weight: bold;
              margin-top: 8px;
            "
          >
            {{ item.name }}
            <em
              style="
                float: right;
                font-style: normal;
                font-weight: normal;
                color: #848484;
              "
              >15:20</em
            >
          </p>
          <p style="margin-left: 10px; line-height: 0px; color: #7e98df">
            Dimas
          </p>
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
  name: 'RoomChat',
  data() {
    return {
      id_login: {
        id_user_login: null
      },
      editPhone: false,
      url: process.env.VUE_APP_BASE_URL,
      show: false,
      latitute: 0,
      longtitute: 0
    }
  },
  computed: {
    ...mapGetters({
      get_user_login: 'data_user',
      get_roomchat: 'get_roomchat'
    })
  },
  methods: {
    ...mapActions(['act_get_roomchat']),
    ...mapMutations([]),
    get_data_room() {
      this.id_login.id_user_login = this.get_user_login.id
    },
    changeEditPhone(data) {
      if (data === false) {
        this.editPhone = false
      } else {
        this.editPhone = true
      }
    }
  },
  created() {
    this.act_get_roomchat(this.get_user_login.id)
    this.get_data_room()
    this.$getLocation().then((coordinates) => {
      this.latitute = coordinates.lat
      this.longtitute = coordinates.lng
    })
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
  margin-top: 20px;
  /* background-color: chartreuse; */
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
}
</style>
