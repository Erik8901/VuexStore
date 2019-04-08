<template>
  <div class="products">
    <ul id="example-1">
        <li v-for="product in productsList" :key="product.id">
        {{ product.name }}
        {{ product.price }}
        {{ product.img }}
        </li>
    </ul>   
  </div>
</template>




<script>
//styles
import productsStyles from './styles/productsStyles.css';


export default {
  name: 'Products',
  data() {
      return {
       productsList: [
          { name: 'prod1',
            price: '400',
            img: '',
            id: '1'
          },
          { name: 'prod2',
            price: '1000',
            img: '',
            id: '2'
          },
          { name: 'prod3',
            price: '300',
            img: '',
            id: '4'
          },
          { name: 'prod4',
            price: '120',
            img: '',
            id: '3'
          },
          { name: 'prod5',
            price: '600',
            img: '',
            id:'5'
          },
          { name: 'prod6',
            price: '1300',
            img: '',
            id: '6'
          },
        ]
      }
     }
}
</script>


