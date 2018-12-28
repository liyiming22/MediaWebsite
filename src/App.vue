<template>
  <div id="app">
    <nav>
      <div class="container">
        <ul class="nav_left">
          <li><router-link to="/"><i class="fas fa-film"></i>我的资源</router-link></li>
          <li><router-link to="/upload"><i class="fas fa-cloud-upload-alt"></i>上传</router-link></li>
        </ul>
        <ul class="nav_right">
          <li><router-link to="/favorite"><i class="fas fa-star"></i>收藏夹</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
    <div class="overlay" v-show="showAnimation">
      <div class="loading-spinner">
        <div class="dot dotOne"></div>
        <div class="dot dotTwo"></div>
        <div class="dot dotThree"></div>
      </div>
    </div>    
  </div>
</template>

<script>
import toastr from 'toastr'
import {
  ERROR_MSG,
  ADD_MEDIA_SUCCESS,
  REMOVE_MEDIA_SUCCESS
}from './store/mutation-types'

export default {
  name: 'app',
  computed: {
    showAnimation () {
      return this.$store.state.showAnimation
    }
  },
  created () {
    this.$store.subscribe((mutation) => {
      if (mutation.payload) {
        switch (mutation.type) {
          case ERROR_MSG:
            toastr.error(mutation.payload.content, mutation.payload.title)
            break
          case ADD_MEDIA_SUCCESS:
            toastr.success('Media added.', 'Success!')
            break
          case REMOVE_MEDIA_SUCCESS:
            toastr.warning('Media removed.', 'Removed!')
            break
        }
      }
    })
  }
}
</script>


<style>
.overlay {
    background: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .loading-spinner {
    position : absolute;
    top      : 50%;
    left     : 50%;
  }
  .dot {
    background    : black;
    border-radius : 100%;
    color         : white;
    width         : 8px;
    height        : 8px;
    line-height   : 8px;
    text-align    : center;
  }
  .dotOne {
    animation : dotOneKeyframes 5s ease  infinite;
    background        : #F9E610;
    position          : absolute;
    top               : 0;
    left              : 0;
  }
  .dotTwo {
    animation : dotTwoKeyframes 5s ease 0.4166666666666s infinite;
    background        : #EFDB06;
    position          : absolute;
    top               : 0;
    left              : 14px;
  }
  .dotThree {
    animation : dotThreeKeyframes 5s ease 0.83333333333s infinite;
    background        : #DBC906;
    position          : absolute;
    top               : 14px;
    left              : 14px;
  }
  @keyframes dotOneKeyframes {
    0% {
      top  : 0;
      left : 0;
    }
    8.3333333333% {
      top  : 14px;
      left : 0;
    }
    16.6666666666% {
    }
    25% {
      top  : 14px;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 14px;
    }
    41.6666666666% {
    }
    50% {
      top  : 14px;
      left : 14px;
    }
    58.3333333333% {
      top  : 0;
      left : 14px;
    }
    66.6666666666% {
    }
    75% {
      top  : 0;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 0;
    }
    91.6666666666% {
    }
    100% {
    }
  }
  @keyframes dotTwoKeyframes {
    0% {
      top  : 0;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 0;
    }
    16.6666666666% {
    }
    25% {
      top  : 0;
      left : 0;
    }
    33.3333333333% {
      top  : 14px;
      left : 0;
    }
    41.6666666666% {
    }
    50% {
      top  : 14px;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 14px;
    }
    66.6666666666% {
    }
    75% {
      top  : 14px;
      left : 14px;
    }
    83.3333333333% {
      top  : 0;
      left : 14px;
    }
    91.6666666666% {
    }
    100% {
    }
  }
  @keyframes dotThreeKeyframes {
    0% {
      top  : 14px;
      left : 14px;
    }
    8.3333333333% {
      top  : 0;
      left : 14px;
    }
    16.6666666666% {
    }
    25% {
      top  : 0;
      left : 14px;
    }
    33.3333333333% {
      top  : 0;
      left : 0;
    }
    41.6666666666% {
    }
    50% {
      top  : 0;
      left : 0;
    }
    58.3333333333% {
      top  : 14px;
      left : 0;
    }
    66.6666666666% {
    }
    75% {
      top  : 14px;
      left : 0;
    }
    83.3333333333% {
      top  : 14px;
      left : 14px;
    }
    91.6666666666% {
    }
    100% {
    }
  }
</style>
