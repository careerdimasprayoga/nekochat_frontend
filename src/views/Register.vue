<template>
  <div class="wrapper" style="background-color: #e5e5e5; width: 100%; height: 800px;">
    <b-container>
      <b-row>
        <b-col xl="12">
          <b-card border-variant="light" class="custom_card">
            <h4 class="custom_font" style="margin-top: 20px;">
              <router-link to="/login">
                <img src="../assets/icons/left-arrow2.png" style="width: 30px;" />
              </router-link>
              <em style="font-style: normal; margin-left: 100px;">Register</em>
            </h4>
            <p style="text-align: left; margin-top:30px;">Let's create your account!</p>
            <b-alert show variant="danger" v-show="alert_error">{{ alert_error_message }}</b-alert>
            <b-form @submit.prevent="on_submit" @reset.prevent="on_reset">
              <label style="margin-top: 10px;">Name</label>
              <b-form-input v-model="form.name" class="custom_input" placeholder="Enter your name"></b-form-input>
              <label style="margin-top: 20px;">Email</label>
              <b-form-input
                type="email"
                v-model="form.email"
                class="custom_input"
                placeholder="Enter your email"
              ></b-form-input>
              <label style="margin-top: 20px;">Phone</label>
              <b-form-input
                type="number"
                v-model="form.phone"
                class="custom_input"
                placeholder="Enter your phone"
              ></b-form-input>
              <label style="margin-top: 20px;">Password</label>
              <b-form-input
                type="password"
                v-model="form.password"
                class="custom_input"
                placeholder="Enter your password"
              ></b-form-input>
              <b-button type="submit" class="custom_button" style="margin-top: 30px;">Register</b-button>
              <p class="login">Register with</p>
              <b-button class="custom_button_2">Google</b-button>
            </b-form>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        password: ''
      },
      alert_error: false,
      alert_error_message: ''
    }
  },
  methods: {
    ...mapActions(['register']),
    on_submit() {
      this.register(this.form)
        .then((result) => {
          this.$router.push('/login')
        })
        .catch((error) => {
          this.alert_error = true
          this.alert_error_message = error.data.msg
        })
    },
    on_reset() {
      this.form = {
        name: '',
        email: '',
        phone: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped>
@font-face {
  font-family: 'rubik';
  src: url('../assets/fonts/static/Rubik-Regular.ttf');
}
.custom_card {
  width: 28rem;
  margin: auto;
  margin-top: 35px;
  border-radius: 30px;
  padding-left: 40px;
  padding-right: 40px;
}
.custom_font {
  font-family: rubik;
  color: #7e98df;
  font-size: 22px;
}
.custom_input {
  outline: 0;
  border-width: 0 0 2px;
  border-color: #232323;
}
.custom_button {
  width: 100px;
  margin-left: 10px;
  border: none;
  background-color: #7e98df;
  width: 300px;
  height: 50px;
  border-radius: 30px;
}
.custom_button:hover {
  width: 100px;
  margin-left: 10px;
  background-color: transparent;
  border: 1px solid #7e98df;
  color: #7e98df;
  width: 300px;
  height: 50px;
  border-radius: 30px;
}
.login {
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #848484;
}
.custom_button_2 {
  width: 100px;
  margin-left: 10px;
  background-color: transparent;
  border: 1px solid #7e98df;
  color: #7e98df;
  width: 300px;
  height: 50px;
  border-radius: 30px;
}
.custom_button_2:hover {
  width: 100px;
  margin-left: 10px;
  background-color: #7e98df;
  width: 300px;
  height: 50px;
  border-radius: 30px;
}
</style>
