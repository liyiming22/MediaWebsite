<template>
  <div>
    <!-- <h1 class="title">{{msg}}</h1>
    <button @click="handleClick">test</button> -->

  </div>
</template>

<script>
import { cos } from '../config'
export default {
  name: 'UploadPage',
  data () {
    return {
      // msg: 'This is UploadPage'
    }
  },
  methods: {
    handleClick: function () {
      console.log(cos)
    }
  }
}
</script>

