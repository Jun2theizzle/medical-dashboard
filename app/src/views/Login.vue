<template>
  <div class="login">
      <input type="text" />
    <button @click="click()">Login</button>
  </div>
</template>

<script>

export default {
  name: 'login',
  props: {
      nextUrl: ''
  },
  methods: {
    click: function() {
        console.log(this.$route.params.nextUrl);
        localStorage.setItem('api-key', 'apikey');
        this.$router.push({ path: this.$route.params.nextUrl})
    }
  }
}
</script>
