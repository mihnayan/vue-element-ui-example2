import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hotels: []
  },
  mutations: {
    setHotels (state, hotels) {
      state.hotels = hotels;
    }
  },
  actions: {
    loadHotels (context) {
      return new Promise((resolve, reject) => {
        if (!localStorage.getItem('hotels')) {
          reject('Hotels are not loaded to Local Storage!');
        }
        const hotels = JSON.parse(localStorage.getItem('hotels'));
        context.commit('setHotels', hotels);
        resolve('Hotels was loaded successfuly');
      })
    }
  }
})