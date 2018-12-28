<template>
  <div class="wrapper">
    <div class="dropbox" ref="dropboxDOM">
      <div class="text-center dragDescription">
        <i class="fas fa-cloud-upload-alt fa-5x" style="color: #39f"></i>
        <h2>{{ dragTitle }}</h2>
        <h2 v-if="file == {}" class="text-center">拖拽文件至此</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { cos } from '../config'
export default {
  name: 'dragBox',
  props: ['dragTitle'],
  data () {
    return {
      file: {}
    }
  },
  // computed: {
  //   showAnimation () {
  //     return this.$store.state.showAnimation
  //   }
  // },
  mounted () {
    let dropbox = this.$refs.dropboxDOM
    dropbox.addEventListener('dragenter', this.onDrag, false)
    dropbox.addEventListener('dragover', this.onDrag, false)
    dropbox.addEventListener('drop', this.onDrop, false)
  },
  methods: {
    uploadFile (item) {
      this.$store.showAnimation = true
      console.log(this.$store.showAnimation)
      const _this = this
      cos.putObject ({
        Bucket: 'test-1257171958',
        Region: 'ap-shanghai',
        Key: item.name,
        Body: item,
        onProgress: function(progressData) {
          console.log(JSON.stringify(progressData));
          console.log(_this.$store.state.showAnimation)
        }},
        function (err, data) {
          const thisURI = 'https://' + data.Location
          // console.log(_this.$store.showAnimation)
          _this.$store.showAnimation = false
          console.log(thisURI)
          _this.$emit('uploadSuccess', item.name, thisURI)
        }
      )
    },
    onDrag () {
      event.stopPropagation()
      event.preventDefault()
    },
    onDrop (event) {
      event.stopPropagation()
      event.preventDefault()
      const dt = event.dataTransfer
      this.file = dt.files[0]
      this.uploadFile(this.file)
    }
  }
}
</script>

<style scoped>
  .dropbox {
      width: 100%;
      height: 100%;
      border: 1px dashed #007bff;
      min-height: 5rem;
  }

  .wrapper {
    width: 50%;
    height: 300px;
  }

  .dragDescription {
    margin-top: 75px;
  }
</style>
