<template>
  <div class="media-details">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 media-details__image">
          <img
            class="img-responsive" :src="media.image" alt="">
        </div>
        <div class="col-lg-8 col-md-8 col-sm-6 col-xs-12 media-details__info">
          <div class="media-details__description">
            <h3>{{media.title}}</h3>
            <p>
              {{media.description}}
            </p>
          </div>
          <!-- <div class="media-details__price-cart">
            <p>${{media.price}}</p>
            <media-button :media="media"></media-button>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // import mediaButton from './mediaButton'
  export default {
    props: ['media'],
    // components: {
    //   'media-button': mediaButton
    // }
    created () {
      console.log("teset2")
    }
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