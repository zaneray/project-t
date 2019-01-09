<template>
  <section class="component-padding">
    <h2>Related Stories</h2>
    <div class="related-content-wrapper">
      <nuxt-link v-for="(item, index) in items" :key="index" class="related-content-item" :to="`/stories/${item.related_content.uid}`">
        <div>item.related_content.slug</div>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
  export default {
    name: "related-content",
    props: {
      items: Array
    },
  }
</script>

<style scoped lang="scss">
  section {
    text-align: center;
  }

  .related-content-wrapper {
    display: flex;

  }

  .related-content-item {
    height: 33vw;
    background: $gray-dark;
    width: 50%;
    text-align: center;
  }
</style>
