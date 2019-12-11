<template>
  <div class="container">
    <div>
      <h1 class="title">touyu.me</h1>
      <mq-layout mq="md+">
        <div class="description">
          <h2>{{ name }}</h2>
          <p>{{ description }}</p>
        </div>
      </mq-layout>
      <mq-layout mq="sm">
        <div class="description-mobile">
          <h2>{{ name }}</h2>
          <p>{{ description }}</p>
        </div>
      </mq-layout>
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
  },
  data() {
    return {
      name: 'Yuto Akiba',
      description: 'RINACITA, Inc, CTO\nSoftware Enginner (Swift / Go)'
    }
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
  white-space: pre-wrap;
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

.description-mobile h2 {
  margin-right: 32px;
  font-weight: 200;
  font-size: 18px;
  letter-spacing: 2px;
}

.description-mobile p {
  font-weight: 200;
  font-size: 14px;
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
