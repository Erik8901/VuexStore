import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        items: null,
        searchText: '',
        searchedList: []
      },
      mutations: {
        SET_ITEMS: (state, items) => {
          state.items = items
           console.log(items)
         },
         SET_SEARCH: (state, keyWords) => {
           console.log(keyWords)
           //keyWords
            let filter = keyWords.toUpperCase();
              for(let i=0; i < state.items.length; i++) {
                if(keyWords.toUpperCase().indexOf(filter)) {
                  return filter
          }
           console.log(filter)
     }
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
