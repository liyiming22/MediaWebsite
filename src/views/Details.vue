<template>
  <div>
    <media-details :media="media"></media-details>
  </div>
</template>

<script>
import MediaDetails from '@/components/MediaDetails.vue'
export default {
  computed: {
    media () {
      return this.$store.getters.mediaById(3)
    }
  },
  created () {
    if (!this.media.title) {
      this.$store.dispatch('mediaById', this.$route.params['id'])
    }
  },
  data () {
    return {
    }
  },
  components: {
    'media-details': MediaDetails
  }
}
</script>