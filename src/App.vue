<template>
  <div id="app">
    <home-view :appURLs="urlLinks"></home-view>
    <description-view></description-view>
    <service-view :appURLs="urlLinks"></service-view>
    <contact-view></contact-view>
  </div>
</template>

<script>
import HomeView from './views/HomeView'
import DescriptionView from './views/DescriptionView'
import ServiceView from './views/ServiceView'
import ContactView from './views/ContactView'

export default {
  name: 'app',
  components: {
    Parallax,
    HomeView,
    DescriptionView,
    ServiceView,
    ContactView
  },
  data() {
    return {
      urlLinks: {
         playStoreURL: "https://play.google.com/store/apps/details?id=com.gogople.a28days",
         appleStoreURL: "https://www.apple.com"
      }
    }
  }
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  font-size: 1vmin;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
