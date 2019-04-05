<template lang="pug">
  #app
    images-feed
</template>

<script>
import ImagesFeed from './components/ImagesFeed'

export default {
  name: 'app',
  components: {
    ImagesFeed
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
