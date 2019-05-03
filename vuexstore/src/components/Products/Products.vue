<template>
  <div class="products">

    <ul id="example-1">
        <li v-for="product in productsList.slice(0,4)" :key="product.name">
        <img class="img" :src="product.img"/>
        <p class="name">{{ product.name }}</p>
        <p class="price">Price: {{ product.price }} €</p>
        <p class="info">{{ product.info }}</p> <hr/>
        <button class="addToCart">Add to cart</button>
        
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
          { name: 'The Chefs kitchen knife',
            price: '100',
            img: require('@/assets/Knife.jpg'),
            info: 'New all around knife for 2019! Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          },
          { name: 'Steel Cutlery Set',
            price: '60',
            img: require('@/assets/ForksandKnifes.jpg'),
            info: 'All around set. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          },
          { name: 'Wooden Sleeves',
            price: '16',
            img: require('@/assets/sleeves.jpeg'),
            info: 'Perfect for cooking. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          },
          { name: 'Wineglass set',
            price: '20',
            img: require('@/assets/wineglasses.jpg'),
            info: 'Perfect for dinnerparties. Lorem ipsum dolor sit amet, consectetur adipiscing elit'
          },
          { name: 'prod5',
            price: '600',
            img: require('@/assets/Knife.jpg'),
            info:'5'
          },
          { name: 'prod6',
            price: '1300',
            img: require('@/assets/Knife.jpg'),
            info: '6'
          },
        ]
      }
     }
}
</script>


