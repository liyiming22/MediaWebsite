import axios from 'axios'
import { API_BASE } from '../config'

import {
  ALL_MEDIAS,
  ALL_MEDIAS_SUCCESS,
  ALL_MEDIAS_FAILURE
}from './mutation-types'

export const mediaActions = {
  allMedias({commit}) {
    commit(ALL_MEDIAS)
    axios.get(`${API_BASE}/medias`).then(response => {
      commit(ALL_MEDIAS_SUCCESS, response.data)
    })
  }
}
