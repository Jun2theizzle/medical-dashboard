<template>
  <b-jumbotron id="login">
    <div v-if="isLoggedIn">
        <b-button variant="danger" @click="logOut">Log Out</b-button>
    </div>
    <div v-else>
      <template slot="lead">Please Login</template>
      <b-form id="login-form" @submit="onSubmit">
        <b-form-group id="login-name" label="Your Name:" label-for="name-input">
          <b-form-input
            id="name-input"
            type="text"
            v-model="form.username"
            required
            placeholder="Enter name" />
        </b-form-group>
        <b-button type="submit" variant="primary">Login</b-button>
      </b-form>
    </div>
  </b-jumbotron>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data() {
    return {
      form : {
        username: ''
      }
    }
  },
  computed: {
    isLoggedIn: function() {
      const apiKey = this.$cookies.get('api-key');
      if(apiKey) {
        return true;
      }
      return false;
    }
  },
  methods: {
    onSubmit: async function(evt) {
      evt.preventDefault();
      try {
        const options = {
          method: 'POST',
          url: 'http://localhost:3000/api/login',
          headers: {
            accept: 'application/json'
          }
        }
        const loginResponse = await axios(options);
        const data = loginResponse.data;
        console.log(data);
        this.$cookies.set('api-key', data['api-key']);

        if(this.$route.params.nextUrl) {
          this.$router.push({ path: this.$route.params.nextUrl })
        }
        else {
          this.$router.push({ path: '/visits'});
        }
      }
      catch(err) {
        alert('Unable to login: ' + err.message)
      }
    },
    logOut: function() {
        this.$cookies.remove('api-key');
        this.$router.push({ path: '/'});
    }
  }
}
</script>

<style lang="less">
#login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 40%;
  margin: 0 auto;

}


</style>