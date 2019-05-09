import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        items: null
      },
      mutations: {
        SET_ITEMS: (state, items) => {
          console.log("test")
           state.items = items
           console.log(items)
         }
      },
      getters: {
        items: state => state.items
      }
});
