import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        items: null,
        searchText: null,
        searchedList: null
      },
      mutations: {
        SET_ITEMS: (state, products) => {
           state.items = products
             console.log(state.items)
         },
         SET_SEARCH: (state,searchedObj, searchedList, searchText) => {
         //console.log(searchedObj)
         state.searchText = searchedObj.searchWords
         //console.log(state.searchText)
         
           
           //keyWords
    //         let filter = searchedObj.searchWords.toUpperCase();
    //           for(let i=0; i < searchedObj.allItems.length; i++) {
                
    //             if(searchedObj.searchWords.toUpperCase().indexOf(filter)) {
    //               return filter
    //       }
    //        console.log(filter)
    //  }
         },
        
      },
      getters: {
        //items: state => state.items
       },
      actions: {
        getSearch: (context, payload) => {
          console.log(payload)
          context.commit('getSearch', payload)
        }
       }
});
