<template>
  <div class="bio">
    <div class="avatar">
      <img src="~/assets/images/bio.png" alt="">
    </div>
    <div class="entry">
      <p>Một nơi để tôi lưu giữ những khoảnh khắc <span class="accent-color">gia đình</span>, những suy nghĩ bất chợt, những con người vô tình trong đời lướt qua, những khung ảnh trong cuộc sống hằng ngày...</p>
      <br />
      <strong class="accent-color">Hiếu Huỳnh 🌿</strong>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">
.bio {
  display: grid;
  grid-template-columns: 140px 1fr;
  grid-gap: 30px;
  margin-bottom: 35px;

  .entry {
    font-weight: bold;
  }

  @media( max-width: 420px ) {
    grid-template-columns: 100%;
    text-align: center;

    .avatar {

      img {
        width: 100px;
        margin: 0 auto;
        display: inherit;
      }
    }
  }
}
</style>