<template>
    <div class="googleMap" :id="mapName">
    </div>
</template>

<script>
//styles
import googleMapstyles from './styles/googleMapstyles.css';


export default {
  name: 'googleMap',
  props: ['name'],
  data: function () {
      return {
          mapName: this.name + "-map",
          viewWidth: 0
      }
  },
   created() {
      window.addEventListener('resize', this.handleWindowSize)
  },
   mounted: function () {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(51.501527,-0.1921837)
    }

    const map = new google.maps.Map(element, options);
  },
  methods: {
    handleWindowSize() {
         this.viewWidth = window.innerWidth;
         
         let map = document.querySelector(".googleMap");
         this.viewWidth < 1300 ? 
           map.style.display = "none" : 
           map.style.display = "flex"
         
                

          
     }
  }
}
</script>


