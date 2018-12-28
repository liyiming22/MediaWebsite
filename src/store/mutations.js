import {
  ALL_MEDIAS,
  ALL_MEDIAS_SUCCESS,
  ALL_MEDIAS_FAILURE,

  MEDIA_BY_ID,
  MEDIA_BY_ID_SUCCESS,

  REMOVE_MEDIA,
  REMOVE_MEDIA_SUCCESS,
  // REMOVE_MEDIA_FAILURE,

  REMOVE_FROM_FAVORITE,
  ADD_TO_FAVORITE,

  ADD_MEDIA,
  ADD_MEDIA_SUCCESS,

  ERROR_MSG
}from './mutation-types'

export const mediaMutations = {
  [ALL_MEDIAS]: (state) => {
    state.showAnimation = true
  },

  [ALL_MEDIAS_SUCCESS]: (state, medias) => {
    state.showAnimation = false
    state.mediaList = medias
  },

  [MEDIA_BY_ID]: (state) => {
    state.showAnimation = true
  },

  [MEDIA_BY_ID_SUCCESS]: (state, media) => {
    state.showAnimation = false
    state.thisMedia = media
  },

  [ALL_MEDIAS_FAILURE]: (state) => {
    state.showAnimation = true
  },

  [REMOVE_MEDIA]: (state, payload) => {
    console.log("REMOVE_MEDIA")
    state.showAnimation = true
  },

  [REMOVE_MEDIA_SUCCESS]: (state, payload) => {
    state.showAnimation = false
    const index = state.mediaList.findIndex(temp => temp._id === payload)
    console.log('index', index)
    state.mediaList.splice(index, 1)
  },

  [ADD_TO_FAVORITE]: (state, media) => {
    state.favorite.push(media)
    console.log(state.favorite)
  },

  [REMOVE_FROM_FAVORITE]: (state, id) => {
    const index = state.favorite.findIndex(fav => fav._id === id)
    state.favorite.splice(index, 1)
  },

  [ADD_MEDIA]: (state, newMedia) => {
    state.showAnimation = true
  },

  [ADD_MEDIA_SUCCESS]: (state, newMedia) => {
    console.log(newMedia)
    state.showAnimation = false
    state.mediaList.push(newMedia)
  },

  [ERROR_MSG]: (state, payload) => {}
}