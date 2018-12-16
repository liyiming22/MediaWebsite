<template>
  <div class="container">
    <div class="box">
      <drag-box @uploadSuccess="handleUpload" dragTitle="此处上传图片"></drag-box>
      <drag-box @uploadSuccess="handleUpload" dragTitle="此处上传影片"></drag-box>
    </div>
    <div class="form-group">
      <label for="Description">添加描述</label>
      <textarea
        name="description"
        class="form-control"
        placeholder="添加描述"
        rows="10"
        v-model="model.description">
      </textarea>
    </div>
    <button @click="handleSave">保存</button>
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
    },
    handleSave () {
      console.log(this.model)
      this.$store.dispatch('addMedia', this.model)
    }
  },
  components: {
    'drag-box': DragBox
  }
}
</script>

<style scoped>
 .container {
   margin-top: 20px;
 }

.box {
  display: flex;
}

.form-group {
  margin-top: 15px;
}

button {
  background: #00CD70;
  border-style: none;
  padding: 10px 15px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  font-size: 12px;
  transition: all 200ms ease-out;
  outline: none;
  border-radius: 0;
}

button:hover {
  background: rgb(99, 214, 160);
}
</style>

