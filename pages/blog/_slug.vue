<template>
  <article class="single-post-container">
    {{ slug }}
  </article>
</template>

<script>
export default {
  asyncData: ( { params } ) => {
    const slug = params.slug

    return {
      slug
    }
  } 
}
</script>