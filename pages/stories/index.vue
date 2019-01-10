<template>
  <section>
    <layout-container content>
      <div v-html="$prismic.asHtml(entry.title)" class="component-padding"></div>
      <div class="component-padding">
        <h2>Featured Post</h2>
        <a>
          <h3>{{$prismic.asText(entry.featured_story.data.title)}}</h3>
          <div v-html="$prismic.asHtml(entry.featured_story.data.subtitle)"></div>
        </a>
      </div>
      <div class="component-padding">
        <h3>The rest of the posts</h3>
        <a v-for="item in entry.stories">

        </a>
      </div>

    </layout-container>
  </section>
</template>

<script>
  import LayoutContainer from "../../components/layout/LayoutContainer";


  export default {
    components: {
      LayoutContainer
    },
    name: "Stories",
    transition: {
      name: 'page',
      mode: 'out-in'
    },
    async asyncData({app, params, error, store}) {
      try {
        let entry = await store.dispatch('stories/getStories')
        return {
          document: entry,
          entry: entry.data
        }
      } catch (err) {
        error({statusCode: 404, message: `The page you are looking for does not exist. `, err: err})
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
