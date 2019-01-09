<template>
 <section class="gallery-grid">
  <gallery-item class="gallery-item" v-for="(item, index) in items" :item="item" :key="index"></gallery-item>

 </section>
</template>

<script>
  import GalleryItem from "../utility/GalleryItem";

  export default {
    components: {GalleryItem},
    name: "gallery-grid",
    props: {
      fields: Object,
      items: Array
    }
  }
</script>

<style scoped lang="scss">
.gallery-grid {
  display: flex;
  flex-wrap: wrap;
}

  .gallery-item {
    width: 33.333%;
  }
</style>
