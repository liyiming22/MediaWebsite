import axios from 'axios'
import { API_BASE } from '../config'

import {
  ALL_MEDIAS,
  ALL_MEDIAS_SUCCESS,

  MEDIA_BY_ID,
  MEDIA_BY_ID_SUCCESS,

  ADD_MEDIA,
  ADD_MEDIA_SUCCESS
}from './mutation-types'

export const mediaActions = {
  allMedias({commit}) {
    commit(ALL_MEDIAS)
    axios.get(`${API_BASE}/medias`).then(response => {
      commit(ALL_MEDIAS_SUCCESS, response.data)
    })
  },

  mediaById({commit}, mediaId) {
    commit(MEDIA_BY_ID)
    axios.get(`${API_BASE}/medias/${mediaId}`).then(response => {
      commit(MEDIA_BY_ID_SUCCESS, response.data)
      console.log(mediaId, response.data)
    })
  },

  addMedia({commit}, newMedia) {
    commit(ADD_MEDIA),
    axios.post(`${API_BASE}/medias`, newMedia).then(response => {
      commit(ADD_MEDIA_SUCCESS, response.data)
    })
  }
}
