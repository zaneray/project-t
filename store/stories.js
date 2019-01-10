export const state = () => ({
  storyDoc: null,
  storyItems: {}
})

export const getters = {
  storyDoc: state => {
    return state.storyDoc
  },
  storyItems: state => {
    return state.storyItems
  },
  storyItemsById: (state) => (uid) => {
    return state.storyItems[uid]
  }
}

export const mutations = {
  SET_STORY_DOC (state, doc) {
    state.storyDoc = doc
  },
  SET_STORY_ITEM (state, storyData) {
    state.storyItems[storyData.uid] = storyData.doc
  }
}

export const actions = {
  async getStories ({getters, commit}) {
    if (getters.storyDoc) {
      return getters.storyDoc
    } else {
      const storyDoc = await this.$prismic.api.getSingle('story_landing', {fetchLinks: ['story.title', 'story.subtitle', 'story.hero_image']})
      commit('SET_STORY_DOC', storyDoc)
      return storyDoc
    }
  },
  async getStoryItemById ({getters, commit}, uid) {
    if (getters.storyItemsById(uid)) {
      return getters.storyItemsById(uid)
    } else {
      const storyItemDoc = await this.$prismic.api.getByUID('story', uid)
      const storyData = {
        uid: uid,
        doc: storyItemDoc
      }
      commit('SET_STORY_ITEM', storyData)
      return storyItemDoc
    }
  }
}
