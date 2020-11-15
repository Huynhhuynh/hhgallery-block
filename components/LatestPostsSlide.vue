<template>
  <div class="latest-posts-slide">
    <h2 class="title is-4">Bài mới nhất</h2>
    <OwlCarousel :items=2 :margin=30 :autoWidth=true :loop=true :nav=false >
      <div class="post-item" v-for="post in posts" :key="post.id">
        <nuxt-link :to="`/blog/${ post.slug }`" class="post-thumb">
          <img :src="post.coverImage.url" :alt="post.title">
        </nuxt-link>
        <div class="post-entry">
          <div class="post-date">{{ post.date }}</div>
          <h4 class="post-title">
            <nuxt-link :to="`/blog/${ post.slug }`">{{ post.title }}</nuxt-link>
          </h4>
        </div>
      </div>
    </OwlCarousel>
  </div>
</template>

<script>
export default {
  props: [ 'posts' ],
  data () {
    return {
      
    }
  }
}
</script>

<style lang="scss">
.latest-posts-slide {
  
  .post-item {
    width: 350px;
    position: relative;

    @media(max-width: 425px) {
      width: 280px;
    }

    .post-entry {
      margin-top: 15px;

      .post-date {
        font-size: .9em;
      }

      .post-title {

        a {
          font-weight: bold;
        }
      }
    }
  }
}
</style>