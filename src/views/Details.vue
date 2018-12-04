<template>
  <div>
    <media-details :media="media" :isAdding="true"></media-details>
  </div>
</template>

<script>
import mediaDetails from '@/components/MediaDetails.vue'
export default {
  name: 'Details',
  data () {
    return {
    }
  },
  components: {
    'media-details': mediaDetails
  }
}
</script>