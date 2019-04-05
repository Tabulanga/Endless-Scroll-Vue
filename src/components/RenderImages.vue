<template  lang="pug">
  .block_images
    .ins_img(v-for="img in images" :key="img.src")
      img(:src="img.src")
    .block_loading
      loading-spiner
</template>

<script>
import LoadingSpiner from './LoadingSpiner'
export default {
  name: 'RenderImages',
  props: {
    images: Array
  },
  components: {
    LoadingSpiner
  },
}
</script>

<style>
  .block_images { 
    width: 690px;
    height: auto;
    background: #eee;
    padding: 10px;
    border: none;
    margin: auto;
    margin-bottom: 20px;
    position: relative;
  }
  .ins_img { 
    border: none;
    display: inline-block;
    position: relative;
    margin: 10px;
    }
  .block_loading { 
    width: 670px;
    height: 400px;
    border: none;
    margin: auto;
    position: relative;
  }
</style>


