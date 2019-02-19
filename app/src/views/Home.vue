<template>
  <b-jumbotron>
    <template slot="header">Welcome to your Dashboard</template>
    <b-button v-if="isLoggedIn" variant="danger" @click="logOut">Login Out</b-button>
    <b-button v-else variant="primary" @click="logIn">Login Here</b-button>

  </b-jumbotron>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'home',
  components: {
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
    logIn: function() {
      this.$router.push({ path: '/login' })
    },
    logOut: function() {
      this.$cookies.remove('api-key');
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
