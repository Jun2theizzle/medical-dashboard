<template>
  <div class="home">
    <button @click="click('thing')">Button</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import axios from 'axios'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    click: async function(message) {
      const response = await axios.get('http://httpbin.org/get');
      alert(JSON.stringify(response));
    }
  }
}
</script>
