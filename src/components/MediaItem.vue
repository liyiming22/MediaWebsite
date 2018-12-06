<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="Media">
      <router-link :to="'/details/'+media._id" class="media-link">
        <div class="media__image">
          <img
            class="img-responsive" :src="media.image" alt="">
        </div>
        <div class="media__description">
          <!-- <div class="media__info"> -->
            <h4>{{media.title}}</h4>
          <!-- </div> -->
        </div>
      </router-link>
      <div class="media__action">
        <fav-button :media="media"></fav-button>
        <del-button :media="media"></del-button>
      </div>
    </div>
  </div>
</template>

<script>
import FavButton from './FavButton.vue'
import DelButton from './DelButton.vue'
export default {
  name: 'media-item',
  props: ['media'],
  components: {
    'fav-button': FavButton,
    'del-button': DelButton
  }
}
</script>

<style>
  .Media {
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

  .media__image img {
    width: 100%;
    height: 100%;
    display: block;
    margin-left: auto;
    margin-right: auto;
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

  /* .media__action {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    transform: translateY(100%);
  } */

  .media__action button {
    float: left;
    border-radius: 0;
    width: 50%;
    display: block;
  }
</style>
