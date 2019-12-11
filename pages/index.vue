<template>
  <div class="container">
    <div>
      <h1 class="title">touyu.me</h1>
      <div class="description">
        <h2>Yuto Akiba</h2>
        <p>RINACITA, Inc, CTO<br />Software Enginner (Swift / Go)</p>
      </div>
      <div class="social-icon-container">
        <a href="https://github.com/touyu">
          <i class="fab fa-github social-icon"></i>
        </a>
        <a href="https://twitter.com/akkey0222">
          <i class="fab fa-twitter social-icon"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'

export default {
  components: {
    // Logo
  }
}
</script>

<style>
.container {
  max-width: 900px;
  width: 80%;
  margin: 0 auto;
}

.title {
  margin-top: 120px;
  font-weight: 200;
  font-size: 48px;
  letter-spacing: 5px;
}

.description {
  display: flex;
  vertical-align: top;
}

.description h2 {
  margin-right: 32px;
  font-weight: 200;
  font-size: 24px;
  letter-spacing: 2px;
}

.description p {
  font-weight: 200;
  font-size: 16px;
  letter-spacing: 2px;
  line-height: 24px;
}

.social-icon-container {
  margin-top: 32px;
}

.social-icon {
  margin-right: 16px;
  font-size: 1.5rem;
}

.social-icon-container a {
  color: black;
}
</style>
