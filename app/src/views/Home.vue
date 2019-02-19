<template>
  <b-jumbotron>
    <template slot="header">Welcome to your Dashboard</template>
    <b-button variant="primary" @click="click()">Login Here</b-button>
  </b-jumbotron>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'home',
  components: {
  },
  methods: {
    click: function() {
      this.$router.push({ path: '/login' })
    }
  }
}
</script>
