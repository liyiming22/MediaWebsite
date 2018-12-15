<template>
  <div class="container">
    <label>图片</label>
    <drag-box @uploadSuccess="handleUpload"></drag-box>
    <label>视频</label>
    <drag-box @uploadSuccess="handleUpload"></drag-box>
  </div>
</template>

<script>
import DragBox from '@/components/dragBox.vue'
import { mediaSet } from '../config'
export default {
  name: 'Upload',
  data () {
    return {
      model: {
        _id: 6666,
        title: '',
        imageURL: 'https://test-1257171958.cos.ap-shanghai.myqcloud.com/defaultImg.jpg',
        mediaURL: '',
        description: 'No description:('
      }
    }
  },
  methods: {
    handleUpload (fileName, fileURI) {
      const fileExtensions = fileName.slice(fileName.lastIndexOf('.') + 1)
      if (mediaSet.has(fileExtensions)) {
        fileName = fileName.slice(0, fileName.lastIndexOf('.'))
        this.model.mediaURL = fileURI
        this.model.title = fileName.slice(0, fileName.lastIndexOf('.'))
      }
      else  this.model.imageURL = fileURI
    }
  },
  components: {
    'drag-box': DragBox
  }
}
</script>
