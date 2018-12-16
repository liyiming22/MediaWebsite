<template>
  <div>
    <template v-for="media in favorite">
      <media-details :media="media"></media-details>
    </template>
  </div>
</template>

<script>
import MediaDetails from '@/components/MediaDetails.vue'
export default {
  data () {
    return {
      favorite: this.$store.state.favorite
    }
  },
  components: {
    'media-details': MediaDetails
  }
}
</script>
