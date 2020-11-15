<template>
  <header id="site-header">
    <div class="site-container">
      <div class="header-container">
        <div class="site-brand">
          <NuxtLink to="/">
            <img src="~/assets/images/hhgallery-brand.png" alt="hhgallery.com" />
          </NuxtLink>
        </div>
        <div class="site-nav">
          <nav>
            <ul>
              <li v-for="nav in navs" :key="nav.name">
                <nuxt-link :to="nav.link">{{ nav.name }}</nuxt-link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => {
    return {
      navs: [
        {
          name: 'Liên Hệ',
          link: '/contact',
      }
      ]
    }
  }
}
</script>