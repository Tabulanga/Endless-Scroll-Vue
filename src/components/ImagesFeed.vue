<template  lang="pug">
  .feed
    .test(v-scroll.passive="handleScroll" v-if="images.length != 0")
      render-images(:images="images")
</template>

<script>
import RenderImages from './RenderImages'

export default {
  name: 'ImagesFeed',
  data () {
    return {
      isLoading: false,
      isEndPage: false,
      nextPageCode: '',
      baseUrl: 'https://www.instagram.com/explore/tags/flowers/?__a=1',
      images: []
    }
  },
  components: {
    RenderImages
  },
  created () {

    this.loadMoreImages();
  },
  methods: {

    handleScroll(event, el) {
      const isBottom = document.documentElement.scrollTop 
        + window.innerHeight 
        + 1000
        >= el.offsetHeight;

      if (isBottom && !this.isLoading) {
        this.loadMoreImages()
      }
    },

    async loadMoreImages() {
      if (this.isLoading || this.isEndPage) {
        return
      }
      this.isLoading = true
      
      const currentUrl = this.baseUrl + '&max_id=' + this.nextPageCode
      
      const json = await fetch(currentUrl)
        .then(blob => blob.json())
        .catch(() => {
          this.isLoading = false
          setTimeout(this.loadMoreImages(), 2000)
        })

      const media = json.graphql.hashtag.edge_hashtag_to_media

      this.nextPageCode = media.page_info.end_cursor
      if (!this.nextPageCode) {
        this.isEndPage = true
      }

      media.edges.map(el => {
        this.images.push({
          src: el.node.thumbnail_resources[2].src,
          isVideo: el.node.is_video
        })
      })

      this.isLoading = false
    }
  }
}
</script>

<style>
</style>
