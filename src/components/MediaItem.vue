<template>
  <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="media-card">
      <router-link :to="'/details/' + media.index" class="media-link">
      <!-- <router-link to="/details" class="media-link"> -->
        <div class="media__image">
          <img class="img-responsive" :src="media.image" alt="">
        </div>
        <div class="media__description">
          <div class="media__info">
            <small>{{media.title}}</small>
            <h4>{{media.title}}</h4>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'media-item',
  props: ['media']
}
</script>

<style>
  .media {
    background: #FFF;
    margin-bottom: 30px;
    margin-right: 10px;
    position: relative;
    overflow: hidden;
  }

  .media-link {
    display: block;
    color: #3d3d3d;
  }

  .media-link:hover {
    color: #3d3d3d;
    text-decoration: none;
  }

  .media .media__image {
    width: 100%;
    /* margin-left: auto; */
    /* margin-right: auto; */
  }

  .media__image img {
    display: block;
    height: 225px;
  }

  /* .media__description {
    width: 100%;
    display: flex;
    padding: 20px 20px 15px;
    background: #FFF;
  } */

  /* .media__info {
    flex: 2;
  } */

  /* .media__description small {
    color: #808080;
  }
  .media__description h4 {
    margin: 3px 0 5px 0;
  } */
</style>
