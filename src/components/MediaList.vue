<template>
  <div>
    <div class="medias">
      <div class="container">
        <div class="row">
          <template v-for="media in mediaList">
            <media-item :media="media"></media-item>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MediaItem from './MediaItem.vue'
export default {
  name: 'media-list',
  data() {
    return {
      mediaList: [
        {
          index: 0,
          image: 'https://product-1257171958.cos.ap-shanghai.myqcloud.com/product1.jpg',
          title: 'test0'
        },
        {
          index: 1,
          image: 'https://product-1257171958.cos.ap-shanghai.myqcloud.com/product1.jpg',
          title: 'test1'
        },
        {
          index: 2,
          image: 'https://product-1257171958.cos.ap-shanghai.myqcloud.com/product1.jpg',
          title: 'test2'
        },
        {
          index: 3,
          image: 'https://product-1257171958.cos.ap-shanghai.myqcloud.com/product1.jpg',
          title: 'test1'
        },
        {
          index: 4,
          image: 'https://product-1257171958.cos.ap-shanghai.myqcloud.com/product1.jpg',
          title: 'test1'
        },
        {
          index: 5,
          image: 'https://product-1257171958.cos.ap-shanghai.myqcloud.com/product1.jpg',
          title: 'test1'
        },
      ]
    }
  },
  created() {
    if(0 === this.mediaList.length) {
      console.log("no media!")
    }
  },
  components: {
    'media-item': MediaItem
  }
}
</script>

<style scoped>
  .medias {
    background: #F7F8FB;
    padding: 30px 0;
  }
</style>
