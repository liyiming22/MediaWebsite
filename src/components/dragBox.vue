<template>
  <div>
    <div class="dropbox" ref="dropboxDOM">
      <div class="text-center">
        <i class="fas fa-cloud-upload-alt fa-5x" style="color: #39f"></i>
      </div>
      <h2 v-if="file == {}" class="text-center">拖拽文件至此</h2>
    </div>
  </div>
</template>

<script>
import { cos } from '../config'
export default {
  name: 'dragBox',
  data () {
    return {
      file: {}
    }
  },
  mounted () {
    let dropbox = this.$refs.dropboxDOM
    dropbox.addEventListener('dragenter', this.onDrag, false)
    dropbox.addEventListener('dragover', this.onDrag, false)
    dropbox.addEventListener('drop', this.onDrop, false)
  },
  methods: {
    uploadFile (item) {
      const _this = this
      cos.putObject ({
        Bucket: 'test-1257171958',
        Region: 'ap-shanghai',
        Key: item.name,
        Body: item,
        onProgress: function(progressData) {
          // console.log(JSON.stringify(progressData));
        }},
        function (err, data) {
          const thisURI = 'https://' + data.Location
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
      border: 1px dashed #007bff;
      min-height: 5rem;
  }
</style>
