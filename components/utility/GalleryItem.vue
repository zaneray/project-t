<template>
  <figure>
    <a :href="item.image.url">
      <img :src="item.image.thumb_small.url" :alt="item.image.thumb_small.alt"/>
    </a>
  </figure>
</template>

<script>
  export default {
    name: "gallery-item",
    props: {
      item: Object
    }
  }
</script>

<style scoped lang="scss">
  img {
    display: block;
  }
</style>
