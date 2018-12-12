<template>
  <div class="media-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 media-details__image">
          <img
            class="img-responsive" :src="media.imageURL" alt="">
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 media-details__info">
          <div class="media-details__description">
            <h3>{{media.title}}</h3>
            <p>
              {{media.description}}
            </p>
          </div>
          <button class="toClipBoardBtn button" :data-clipboard-text="media.mediaURL">复制链接到剪贴板</button>
          <button class="openPlayerBtn button">使用MyVLC打开</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ClipboardJS from 'clipboard'
export default {
  props: ['media'],
  mounted () {
    const clipboard = new ClipboardJS('.toClipBoardBtn')
  }
}
</script>

<style scoped>
  .media-details {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
  .media-details__description {
    padding-top: 30px;
    margin-bottom: 20px;
  }
  .media-details__description h3 {
    margin: 5px 0 30px 0;
  }
  .toClipBoardBtn,
  .openPlayerBtn {
    border-radius: 0;
    width: 50%;
  }

  .openPlayerBtn {
    background: #67C23A;
  }

  .openPlayerBtn:hover {
    background: #9dc237;
  }
</style>