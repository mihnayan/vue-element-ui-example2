<template>
  <div id="app">
    <el-container>
      <Hotels/>
    </el-container>
  </div>
</template>

<script>
import hotelsData from './store/hotels_data.js'
import Hotels from './components/Hotels.vue'

export default {
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

</style>
