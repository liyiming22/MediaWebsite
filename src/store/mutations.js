import {
  ALL_MEDIAS,
  ALL_MEDIAS_SUCCESS,
  ALL_MEDIAS_FAILURE,

  REMOVE_MEDIA,
  REMOVE_MEDIA_SUCCESS,
  REMOVE_MEDIA_FAILURE,

  REMOVE_FROM_FAVORITE,
  ADD_TO_FAVORITE
}from './mutation-types'

export const mediaMutations = {
  [ALL_MEDIAS] (state) {
    state.showAnimation = true
    console.log(state.showAnimation)
  },

  [ALL_MEDIAS_SUCCESS] (state) {
    state.showAnimation = false
    console.log("all success")
  },

  [ALL_MEDIAS_FAILURE] (state) {
    state.showAnimation = true
    console.log("all failure")
  },

  [REMOVE_MEDIA] (state) {
    console.log("remove")
  },

  [REMOVE_MEDIA_SUCCESS] (state, id) {
    const index = state.mediaList.findIndex(me => me._id === id)
    console.log(index)
    state.mediaList.splice(index, 1)
  },

  [ADD_TO_FAVORITE]: (state, media) => {
    state.favorite.push(media)
    console.log(state.favorite)
  },

  [REMOVE_FROM_FAVORITE]: (state, id) => {
    const index = state.favorite.findIndex(fav => fav._id === id)
    state.favorite.splice(index, 1)
  }
}