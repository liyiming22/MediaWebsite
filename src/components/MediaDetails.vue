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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['media'],
  }
</script>

<style>
  .media-details {
    border-bottom: 2px solid #F5F5F5;
    padding: 30px 0;
  }
  .media-details__description {
    padding-top: 30px;
  }
  .media-details__description h3 {
    margin: 5px 0 30px 0;
  }
</style>