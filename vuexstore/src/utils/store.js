import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        items: null,
        searchText: ''
      },
      mutations: {
        SET_ITEMS: (state, items) => {
          state.items = items
           console.log(items)
         },
         SET_SEARCH: (state, keyWords) => {
           console.log(keyWords)
            state.searchText = keyWords
         },
      // },
      // getters: {
      //   items: state => state.items
      //  },
      // actions: {
      //   getSearch: (context, payload) => {
      //     console.log(payload)
      //     context.commit('getSearch', payload)
      //   }
       }
});
