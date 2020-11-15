<template>
  <div>
    <Bio />

    <hr />

    <div class="article-area">
      <LatestPostsSlide :posts="posts" />
    </div>
  </div>
</template>

<script>
import { gql } from 'graphql-request';

export default {
  async asyncData({ $graphcms }) {
    const { posts } = await $graphcms.request(
      gql`
        {
          posts {
            id
            slug
            title
            excerpt
            coverImage {
              url(transformation: {image: {resize: {height: 450, width: 350, fit: crop}}})
            }
            author {
              name
            }
            date
            tags
          }
        }
      `
    );

    return { posts };
  },
}
</script>