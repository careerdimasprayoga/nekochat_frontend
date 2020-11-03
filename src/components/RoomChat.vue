<template>
  <b-row>
    <b-col sm="12" id="header">
      <img
        v-if="this.getterDataInRoomChat[0].user_id !== this.getterUserLogin.id"
        v-bind:src="`${url}` + `/${this.getterDataInRoomChat[0].user_image}`"
        class="styleHeaderImage"
      />
      <img
        v-else
        v-bind:src="`${url}` + `/${this.getterDataInRoomChat[1].user_image}`"
        class="styleHeaderImage"
      />
      <h5
        class="styleHeaderName"
        v-if="this.getterDataInRoomChat[0].user_id !== this.getterUserLogin.id"
      >
        {{ this.getterDataInRoomChat[0].user_name }}
      </h5>
      <h5 class="styleHeaderName" v-else>
        {{ this.getterDataInRoomChat[1].user_name }}
      </h5>
      <!-- {{ this.getterDataInRoomChat }} -->
      <!-- {{ this.getterUserLogin }} -->
      <p class="styleHeaderStatus text-color">Online</p>
      <img
        src="../assets/icons/profile_menu.png"
        class="iconProfile"
        v-b-toggle.sidebar-2
      />
      <b-sidebar id="sidebar-2" title="Profile" right shadow>
        <div class="px-3 py-2">
          <b-img
            v-if="
              this.getterDataInRoomChat[0].user_id !== this.getterUserLogin.id
            "
            v-bind:src="
              `${url}` + `/${this.getterDataInRoomChat[0].user_image}`
            "
            fluid
            class="styleSideBar mt-4 mb-2"
          ></b-img>
          <b-img
            v-else
            v-bind:src="
              `${url}` + `/${this.getterDataInRoomChat[1].user_image}`
            "
            fluid
            class="styleSideBar mt-4 mb-2"
          ></b-img>
          <h5
            class="mt-5"
            v-if="
              this.getterDataInRoomChat[0].user_id !== this.getterUserLogin.id
            "
          >
            {{ this.getterDataInRoomChat[0].user_name }}
          </h5>
          <h5 class="mt-5" v-else>
            {{ this.getterDataInRoomChat[1].user_name }}
          </h5>
          <p>Online</p>
          <h5>Phone Number</h5>
          <p
            v-if="
              this.getterDataInRoomChat[0].user_id !== this.getterUserLogin.id
            "
          >
            {{ this.getterDataInRoomChat[0].user_phone }}
          </p>
          <p v-else>{{ this.getterDataInRoomChat[1].user_phone }}</p>
          <hr />
          <b-col xl="12" class="menu-wrapper">
            <b-button size="md" class="btn-custom-selected">Location</b-button>
            <b-button size="md" class="btn-custom ml-1">Image</b-button>
            <b-button size="md" class="btn-custom ml-1">Document</b-button>
          </b-col>
          <b-col sm="12" class="mt-2">
            <img src="../assets/icons/dummy.png" style="width: 270px" />
          </b-col>
          <!-- <b-col
            sm="12"
            class="mt-4"
            v-if="
              this.getterDataInRoomChat[0].user_id !== this.getterUserLogin.id
            "
          >
            <GmapMap
              :center="{
                lat: this.getterDataInRoomChat[0].user_lat,
                lng: this.getterDataInRoomChat[0].user_lng
              }"
              :zoom="15"
              map-type-id="terrain"
              style="width: 270px; height: 270px"
            >
              <GmapMarker
                :position="{
                  lat: this.getterDataInRoomChat[0].user_lat,
                  lng: this.getterDataInRoomChat[0].user_lng
                }"
                :clickable="true"
                :dragable="true"
              />
            </GmapMap>
          </b-col>
          <b-col sm="12" class="mt-4" v-else>
            <GmapMap
              :center="{
                lat: this.getterDataInRoomChat[1].user_lat,
                lng: this.getterDataInRoomChat[1].user_lng
              }"
              :zoom="15"
              map-type-id="terrain"
              style="width: 270px; height: 270px"
            >
              <GmapMarker
                :position="{
                  lat: this.getterDataInRoomChat[1].user_lat,
                  lng: this.getterDataInRoomChat[1].user_lng
                }"
                :clickable="true"
                :dragable="true"
              />
            </GmapMap>
          </b-col> -->
        </div>
      </b-sidebar>
    </b-col>
    <b-col sm="12" id="chat">
      <b-container>
        <b-row v-for="(item, index) in getterDataInRoomChat" :key="index">
          <b-col sm="12 mt-2" v-if="item.id_receive === getterUserLogin.id">
            <img
              v-bind:src="`${url}` + `/${item.user_image}`"
              class="styleHeaderChat mr-3"
            />
            <p class="textChatReceive">
              {{ item.message }}
            </p>
          </b-col>
          <b-col sm="12 mt-2" v-else>
            <img
              v-bind:src="`${url}` + `/${getterUserLogin.image}`"
              class="styleHeaderChat ml-3 float-right"
            />
            <p class="textChatSender">
              {{ item.message }}
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
    <b-col sm="12">
      <form @submit.prevent="sendChat()">
        <b-form-input
          class="text-input"
          placeholder="Input your message"
          v-model="chatMessage"
        ></b-form-input>
      </form>
    </b-col>
  </b-row>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import io from 'socket.io-client'

export default {
  name: 'HelloWorld',
  data() {
    return {
      socket: io(process.env.VUE_APP_BASE_URL),
      url: process.env.VUE_APP_BASE_URL,
      editPhone: false,
      chatMessage: '',
      dataMessage: [
        {
          roomchat_id: '',
          id_login: '',
          id_receive: '',
          message: ''
        }
      ],
      imageChanger: '',
      dataPreviusMessage: []
    }
  },
  computed: {
    ...mapGetters({
      getterDataInRoomChat: 'dataInRoomChat',
      getterUserLogin: 'data_user'
    })
  },
  mounted() {
    this.socket.on('dataChatMessage', (data) => {
      this.dataPreviusMessage.push(data)
      this.mutationPushInRoomChat(this.dataPreviusMessage)
    })
  },
  methods: {
    ...mapMutations({ mutationPushInRoomChat: 'pushInRoomChat' }),
    ...mapActions({
      actionSendChat: 'postChat',
      actionGetInRoomChat: 'getInRoomChat'
    }),
    sendChat() {
      let receiver = ''
      if (this.getterDataInRoomChat[0].id_receive === this.getterUserLogin.id) {
        receiver = this.getterDataInRoomChat[0].id_sender
      } else {
        receiver = this.getterDataInRoomChat[0].id_receive
      }
      const dataMessage = {
        roomchat_id: this.getterDataInRoomChat[0].roomchat_id,
        id_login: this.getterUserLogin.id,
        id_receive: receiver,
        message: this.chatMessage
      }
      this.actionSendChat(dataMessage)
      this.dataPreviusMessage = [...this.getterDataInRoomChat]
      const dataMessageTwo = {
        roomchat_id: this.getterDataInRoomChat[0].roomchat_id,
        id_sender: this.getterUserLogin.id,
        id_receive: receiver,
        message: this.chatMessage,
        created: new Date(),
        user_id: receiver,
        user_name: this.getterDataInRoomChat[0].user_name,
        user_email: this.getterDataInRoomChat[0].user_email,
        user_image: this.getterDataInRoomChat[0].user_image
      }
      this.socket.emit('globalMessage', dataMessageTwo)
      this.chatMessage = ''
    }
  },
  created() {}
}
</script>

<style scoped>
#header {
  background-color: #ffffff;
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
}
.text-input {
  border-radius: 30px;
  margin: auto;
  width: 900px;
  margin-top: 20px;
}
.styleHeaderImage {
  width: 60px;
  height: 60px;
  border-radius: 20px;
  margin-top: 10px;
  margin-left: 30px;
}
.styleHeaderName {
  margin-top: -60px;
  margin-left: 120px;
}
.styleHeaderStatus {
  margin-top: 0px;
  margin-left: 120px;
}
.text-color {
  color: #7e98df;
}
#chat {
  overflow: auto;
  height: 470px;
  display: flex;
  flex-direction: column-reverse;
}
#chat::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: #f5f5f5;
  border-radius: 10px;
}

#chat::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

#chat::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #fff;
  background-image: -webkit-gradient(
    linear,
    40% 0%,
    75% 84%,
    from(#4d9c41),
    to(#19911d),
    color-stop(0.6, #54de5d)
  );
}
.styleHeaderChat {
  width: 50px;
  height: 50px;
  border-radius: 20px;
}
.textChatReceive {
  background-color: #7e98df;
  width: 450px;
  display: inline-block;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 5px;
  padding: 10px;
  color: #ffffff;
}
.textChatSender {
  background-color: #ffffff;
  width: 450px;
  padding: 10px;
  float: right;
  border-top-left-radius: 20px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
}
.iconProfile {
  float: right;
  margin-top: -60px;
  margin-right: 30px;
}
.iconProfile:hover {
  cursor: pointer;
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
.menu-wrapper {
  width: 300px;
  margin-top: 20px;
}
.btn-custom {
  background-color: transparent;
  color: black;
  border-radius: 15px;
  border: none;
  padding: 7px;
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
</style>
