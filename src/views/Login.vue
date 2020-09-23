<template>
  <div class="wrapper" style="background-color: #e5e5e5; width: 100%; height: 680px;">
    <b-container>
      <b-row>
        <b-col xl="12">
          <b-card border-variant="light" class="custom_card">
            <h4 class="custom_font text-center" style="margin-top: 20px;">Login</h4>
            <p style="text-align: left; margin-top:20px;">Hi!, Welcome back</p>
            <b-alert show variant="danger" v-show="alert_error">{{ alert_error_message }}</b-alert>
            <b-form @submit.prevent="on_submit" @reset.prevent="on_reset">
              <label style="margin-top: 10px;">Email</label>
              <b-form-input
                type="email"
                v-model="form.email"
                class="custom_input"
                placeholder="Enter your email"
              ></b-form-input>
              <label style="margin-top: 20px;">Password</label>
              <b-form-input
                type="password"
                v-model="form.password"
                class="custom_input"
                placeholder="Enter your password"
              ></b-form-input>
              <router-link to="/" style="text-decoration: none;">
                <p class="link" style="cursor: pointer;">Forgot password?</p>
              </router-link>
              <b-button type="submit" class="custom_button">Login</b-button>
              <p class="login">Login with</p>
              <b-button class="custom_button_2">Google</b-button>
              <p class="text-center" style="margin-top: 25px; font-family: rubik; font-size: 11pt;">
                Don't have an account?
                <router-link to="/register" style="text-decoration: none;">
                  <em
                    style="font-style: normal;text-decoration: none; font-family: rubik; color: #7e98df; font-size: 11pt; cursor: pointer;"
                  >Sign Up</em>
                </router-link>
              </p>
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
  name: 'Login',
  data() {
    return {
      form: {
        email: '',
        password: ''
      },
      alert_error: false,
      alert_error_message: ''
    }
  },
  methods: {
    ...mapActions(['login']),
    on_submit() {
      this.login(this.form)
        .then((result) => {
          this.$router.push('/')
        })
        .catch((error) => {
          this.alert_error = true
          this.alert_error_message = error.data.msg
        })
    },
    on_reset() {
      this.form = {
        email: '',
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
.link {
  text-align: right;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #7e98df;
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
