<template>
  <div class="container">
    <desktop  v-if="$device.isDesktop" />

    <mobile v-if="!$device.isDesktop"/>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import desktop from '~/components/desktop/desktop.vue'
import mobile from '~/components/mobile/mobile.vue'

export default {
  components: {
    Logo,
    desktop,
    mobile
  }
}
</script>

<style lang="scss">

$text-color: #18214D;

/* .container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
} */
</style>
