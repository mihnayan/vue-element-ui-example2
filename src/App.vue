<template>
  <div id="app">
    <Hotels/>
  </div>
</template>

<script>
import hotelsData from './store/hotels_data.js'
import Hotels from './components/Hotels.vue'

export default {
  name: 'app',
  components: {
    Hotels
  },
  created () {
    localStorage.setItem('hotels', JSON.stringify(hotelsData));
    this.$store.dispatch('loadHotels')
    .then(data => console.info(data))
    .catch(error => console.error(error));
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
