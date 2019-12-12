<template>
  <div class="sf-site-all">
    <nuxt class="sf-site-content" />
    <bottom />
  </div>
</template>

<script>
import Bottom from '~/components/Bottom.vue'

export default {
  components: {
    Bottom
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

.sf-site-all {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.sf-site-content {
  flex: 1;
}
</style>
