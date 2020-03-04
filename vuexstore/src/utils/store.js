import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        items: null,
        searchText: null,
        productInfo: {
          name: '',
          price: 0,
          type: '',
          img: ''
        },
        searchedList: null,
        productsCart: []
      },
      mutations: {
        SET_ITEMS: (state, products) => {
           state.items = products
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
         SET_CART:(state, productsAdded) => {
            state.productsCart.push(productsAdded.productsCart)
        },
         SET_PRODUCT_INFO:(state, productSelected) => {
           state.productInfo.name = productSelected.productInfo.name
           state.productInfo.price = productSelected.productInfo.price
           state.productInfo.info = productSelected.productInfo.info
           state.productInfo.img = productSelected.productInfo.img
        }
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
