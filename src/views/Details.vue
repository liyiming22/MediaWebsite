<template>
  <div>
    <media-details :media="media"></media-details>
  </div>
</template>

<script>
import MediaDetails from '@/components/MediaDetails.vue'
export default {
  created () {
    if (!this.media.title) {
      this.$store.dispatch('mediaById', this.$route.params['id'])
    }
  },
  
  computed: {
    media () {
      return this.$store.getters.mediaById(this.$route.params['id'])
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