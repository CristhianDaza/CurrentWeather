<template>
  <div class="containerCard">
    <Location city="Paris" country="Francia" />
    <Location city="Berlin" country="Alemania" />
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
}
</style>