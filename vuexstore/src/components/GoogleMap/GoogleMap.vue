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
      }
  },
   mounted: function () {
    const element = document.getElementById(this.mapName)
    const options = {
      zoom: 14,
      center: new google.maps.LatLng(51.501527,-0.1921837)
    }

    const map = new google.maps.Map(element, options);
  }
}
</script>


