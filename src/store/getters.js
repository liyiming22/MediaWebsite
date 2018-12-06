export const mediaGetters = {
  allMedias: (state, getters) => {
    return state.mediaList
  },
  mediaById: (state, getters) => id => {
    if(getters.allMedias.length > 0) {
      return getters.allMedias.filter(m => m._id === id)[0]
    }
    else {
      return state.mediaList
    }
  }
}
