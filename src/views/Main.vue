<template>
  <b-container fluid>
    <b-row style="background-color: #f5f5f5">
      <b-col
        sm="3"
        style="background-color: #ffffff; border-right: 1px solid #e5e5e5"
      >
        <SideMenu />
      </b-col>
      <b-col sm="9">
        <h5
          class="text-center"
          v-if="this.getterDataInRoomChat.length < 1"
          style="margin-top: 250px"
        >
          Please select a chat to start messaging
        </h5>
        <RoomChat v-else />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import SideMenu from '@/components/SideMenu.vue'
import RoomChat from '@/components/RoomChat.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Main',
  components: {
    SideMenu,
    RoomChat
  },
  data() {
    return {
      selectChat: false
    }
  },
  computed: {
    ...mapGetters({
      getterGetListRoomChat: 'dataListRoomChat',
      getterDataInRoomChat: 'dataInRoomChat'
    })
  },
  methods: {},
  created() {}
}
</script>
