<template>
  <div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/footer.vue'

export default {
  components: {
    Footer
  }
}
</script>

<style>
html {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
