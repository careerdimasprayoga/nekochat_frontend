<template>
  <b-row>
    <b-col sm="12" id="header">
      <img v-bind:src="`${url}` + '/hibiki.jpg'" class="styleHeaderImage" />
      <h5 class="styleHeaderName">Arif Rahman</h5>
      <p class="styleHeaderStatus text-color">Online</p>
      <img
        src="../assets/icons/profile_menu.png"
        class="iconProfile"
        v-b-toggle.sidebar-2
      />
      <b-sidebar id="sidebar-2" title="Profile" right shadow>
        <div class="px-3 py-2">
          <b-img
            v-bind:src="`${url}` + '/hibiki.jpg'"
            fluid
            class="styleSideBar mt-4 mb-2"
          ></b-img>
          <h5 class="mt-5">Arif Rahman</h5>
          <p>Online</p>
          <h5>Phone Number</h5>
          <p>081385394637</p>
          <hr />
          <b-col xl="12" class="menu-wrapper">
            <b-button size="md" class="btn-custom-selected">Location</b-button>
            <b-button size="md" class="btn-custom" style="margin-left: 1px"
              >Image</b-button
            >
            <b-button size="md" class="btn-custom" style="margin-left: 1px"
              >Document</b-button
            >
          </b-col>
          <b-col sm="12" class="mt-2">
            <img src="../assets/icons/dummy.png" style="width: 270px" />
          </b-col>
        </div>
      </b-sidebar>
    </b-col>
    <b-col sm="12" id="chat">
      <b-container>
        <b-row>
          <b-col sm="12 mt-2">
            <img
              v-bind:src="`${url}` + '/hibiki.jpg'"
              class="styleHeaderChat mr-3"
            />
            <p class="textChatReceive">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              perferendis quod rerum impedit qui molestias minima consequuntur
              aliquam explicabo exercitationem nihil, dicta vitae blanditiis
              corporis maxime dolores est ad aperiam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus quis magni deleniti enim
              quisquam quidem soluta dolore sunt aspernatur velit nesciunt
              necessitatibus sed commodi harum officia, eaque quasi in ratione!
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12 mt-2">
            <img
              v-bind:src="`${url}` + '/hibiki.jpg'"
              class="styleHeaderChat ml-3"
              style="float: right"
            />
            <p class="textChatSender">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              perferendis quod rerum impedit qui molestias minima consequuntur
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12 mt-2">
            <img
              v-bind:src="`${url}` + '/hibiki.jpg'"
              class="styleHeaderChat mr-3"
            />
            <p class="textChatReceive">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              perferendis quod rerum impedit qui molestias minima consequuntur
              aliquam explicabo exercitationem nihil, dicta vitae blanditiis
              corporis maxime dolores est ad aperiam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus quis magni deleniti enim
              quisquam quidem soluta dolore sunt aspernatur velit nesciunt
              necessitatibus sed commodi harum officia, eaque quasi in ratione!
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12 mt-2">
            <img
              v-bind:src="`${url}` + '/hibiki.jpg'"
              class="styleHeaderChat ml-3"
              style="float: right"
            />
            <p class="textChatSender">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              perferendis quod rerum impedit qui molestias minima consequuntur
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12 mt-2">
            <img
              v-bind:src="`${url}` + '/hibiki.jpg'"
              class="styleHeaderChat mr-3"
            />
            <p class="textChatReceive">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              perferendis quod rerum impedit qui molestias minima consequuntur
              aliquam explicabo exercitationem nihil, dicta vitae blanditiis
              corporis maxime dolores est ad aperiam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus quis magni deleniti enim
              quisquam quidem soluta dolore sunt aspernatur velit nesciunt
              necessitatibus sed commodi harum officia, eaque quasi in ratione!
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12 mt-2">
            <img
              v-bind:src="`${url}` + '/hibiki.jpg'"
              class="styleHeaderChat ml-3"
              style="float: right"
            />
            <p class="textChatSender">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              perferendis quod rerum impedit qui molestias minima consequuntur
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12 mt-2">
            <img
              v-bind:src="`${url}` + '/hibiki.jpg'"
              class="styleHeaderChat mr-3"
            />
            <p class="textChatReceive">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              perferendis quod rerum impedit qui molestias minima consequuntur
              aliquam explicabo exercitationem nihil, dicta vitae blanditiis
              corporis maxime dolores est ad aperiam? Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Accusamus quis magni deleniti enim
              quisquam quidem soluta dolore sunt aspernatur velit nesciunt
              necessitatibus sed commodi harum officia, eaque quasi in ratione!
            </p>
          </b-col>
        </b-row>
        <b-row>
          <b-col sm="12 mt-2">
            <img
              v-bind:src="`${url}` + '/hibiki.jpg'"
              class="styleHeaderChat ml-3"
              style="float: right"
            />
            <p class="textChatSender">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              perferendis quod rerum impedit qui molestias minima consequuntur
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-col>
    <b-col sm="12">
      <b-form-input
        style="
          border-radius: 30px;
          margin: auto;
          width: 900px;
          margin-top: 20px;
        "
      ></b-form-input>
    </b-col>
  </b-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      url: process.env.VUE_APP_BASE_URL,
      editPhone: false
    }
  }
}
</script>

<style scoped>
#header {
  background-color: #ffffff;
  height: 80px;
  border-bottom: 1px solid #e5e5e5;
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
