<template>
  <div id="app">
    <CreateSecret />
    <GetSecret />
  </div>
</template>

<script>
import CreateSecret from './components/CreateSecret.vue'
import GetSecret from './components/GetSecret.vue'

export default {
  name: 'App',
  components: {
    CreateSecret,
    GetSecret
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
