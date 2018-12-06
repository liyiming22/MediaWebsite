<template>
  <div>
    <button class="button button-danger" @click="removeMedia(media._id)">删除</button>
  </div> 
</template>

<script>
import {
  REMOVE_MEDIA,
  REMOVE_MEDIA_SUCCESS
}from '../store/mutation-types'

export default {
  props: ['media'],
  methods: {
    removeMedia (id) {
      this.$store.commit('REMOVE_MEDIA_SUCCESS', id)
    }
  }
}
</script>
