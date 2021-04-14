<template>
  <div class="containerCard">
    <Location city="París" country="Francia" codigo="FRA" />
    <Location city="Medellin" country="Colombia" codigo="CO"/>
    <AddLocations />
  </div>
</template>

<script>
import Location from "@/components/Location.vue";
import AddLocations from "@/components/AddLocations.vue";
export default {
  components: {
    Location,
    AddLocations
  },
};
</script>

<style>
.containerCard {
  position: relative;
  top: -120px;
  right: 50px;
}
</style>