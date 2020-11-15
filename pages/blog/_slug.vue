<template>
  <article class="single-post-container">
    <div class="post-heading">
      <div class="post-meta">
        <div class="post-author">⌨ {{ post.author.name }}</div>
        <div class="post-tag">📎 {{ post.tags.join( ', ' ) }}</div>
      </div>
      <h1 class="title is-4">{{ post.title }}</h1>
      <img :src=post.coverImage.url alt="post.title" />
    </div>
    <div class="post-entry">
      <u v-if="post.excerpt" class="excerpt" >{{ post.excerpt }}</u>
      <div v-html="$md.render( post.content.markdown )" class="markdown-body __content"></div>
    </div>
  </article>
</template>

<script>
import { gql } from 'graphql-request'

export default {
  async asyncData ( { $graphcms, params } ) {
    const slug = params.slug

    const { post } = await $graphcms.request(
      gql`
        {
          post(where: {slug: "${ slug }"}) {
          id
          slug
          title
          excerpt
          coverImage {
            url(transformation: {image: {}})
          }
          author {
            name
          }
          date
          tags
          content {
            markdown
          }
        }
        }
      `
    );

    return {
      post
    }
  } 
}
</script>

<style lang="scss">
.single-post-container {

  .excerpt {
    margin-bottom: 35px;
    display: inline-block;
  }
}

.post-heading {
  margin-block: 25px;

  .post-meta {
    display: flex;
    flex-wrap: wrap;
    margin-block: 15px;

    > * {
      margin-right: 20px;
    }
  }
}
</style>