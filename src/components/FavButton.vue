<template>
  <div>
    <button v-if="isLike" class="button" @click="addToFavorite">收藏</button>
    <button v-else class="button button-danger" @click="removeFavorite(media._id)">取消</button>
  </div> 
</template>

<script>
import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE
}from '../store/mutation-types'

export default {
  props: ['media'],
  data () {
    return {
      favorite: this.$store.state.favorite
    }
  },
  computed: {
    isLike () {
      return this.favorite.indexOf(this.media) < 0
    }
  },
  methods: {
    addToFavorite () {
      this.$store.commit(ADD_TO_FAVORITE, this.media)
    },

    removeFavorite (id) {
      this.$store.commit(REMOVE_FROM_FAVORITE, id)
    }
  }
}
</script>

