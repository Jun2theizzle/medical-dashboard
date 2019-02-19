<template>
  <b-jumbotron>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/visits">Visits</router-link> 
    </div>
    <template slot="lead">An unforseen error has happened</template>
  </b-jumbotron>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'error',
}
</script>
