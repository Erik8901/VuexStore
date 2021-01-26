<template>
    <div class="banner">
        <h1 class="bannerText1">Everything you need for your kitchen</h1>
        <h3 class="bannerText2">Checkout out our online  <router-link to="/Productpage" class="link">Store</router-link></h3>
    </div>
</template>


<script>
//styles
import bannerstyles from './styles/bannerStyles.css';

export default {
  name: 'Banner',
  props: {

},
data() {
    return {
        
    }   
}
}
</script>


