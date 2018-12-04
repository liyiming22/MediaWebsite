<template>
  <div class="media-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 media-details__image">
          <img
            class="img-responsive" :src="media.image" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'media-details',
  props: ['media']
}
</script>

<style>
  .media-details {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
  .media-details__image {
  }
  .media-details__description {
    padding-top: 30px;
  }
  .media-details__description small {
    color: #808080;
  }
  .media-details__description h3 {
    margin: 5px 0 30px 0;
  }
  .media-details__price-cart {
    display: flex;
    padding-top: 30px;
  }
  .media-details__price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }
</style>
