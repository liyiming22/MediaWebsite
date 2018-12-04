<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="media">
      <router-link :to="'/details/'+media._id" class="media-link">
        <div class="media__image">
          <img
            class="img-responsive" :src="media.image" alt="">
        </div>
        <div class="media__description">
          <div class="media__info">
            <!-- <small>{{media.manufacturer.name}}</small>
            <h4>{{media.name}}</h4> -->
            <small>{{media.title}}</small>
            <h4>{{media.title}}</h4>
          </div>
          <!-- <div class="media__price-cart">
            ${{media.price}}
          </div> -->
        </div>
      </router-link>
      <!-- <div class="media__action"> -->
        <!-- <media-button :media="media"></media-button> -->
        <!--<button class="button"><i class="fa fa-cart-plus"></i> Add to Cart</button>-->
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
// import mediaButton from './mediaButton.vue'
export default {
  name: 'media-item',
  props: ['media'],
  // components: {
  //   'media-button': mediaButton
  // }
}
</script>

<style>
  .media {
    background: #FFF;
    margin-bottom: 30px;
    position: relative;
    overflow: hidden;
  }
  .media .media__description,
  .media .media__action {
    transition: 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) transform;
  }
  .media:hover .media__description {
    transform: translateY(-40px);
  }
  .media:hover .media__action {
    transform: none;
  }
  .media-link {
    display: block;
    color: #3D3D3D;
  }
  .media-link:hover {
    color: #3D3D3D;
    text-decoration: none;
  }
  .media .media__image {
    width: 100%;
  }
  .media__image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 225px;
  }
  .media__description {
    width: 100%;
    display: flex;
    padding: 20px 20px 15px;
    background: #FFF;
  }
  .media__info {
    flex: 2;
  }
  .media__description small {
    color: #808080;
  }
  .media__description h4 {
    margin: 3px 0 5px 0;
  }
  .media__price-cart {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    color: #51D2B7;
  }
  .media__price-cart p {
    flex-grow: 2;
    font-size: 20px;
    font-weight: bold;
  }
  .media__action {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
  }
  .media__action button {
    border-radius: 0;
    width: 100%;
    display: block;
  }
</style>
