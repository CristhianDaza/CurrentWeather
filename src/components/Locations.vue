<template>
  <div class="containerCard">
    <Location city="Paris" country="Francia" />
    <Location city="Berliln" country="Alemania" />
  </div>
</template>

<script>
import Location from "@/components/Location.vue";
export default {
  components: {
    Location,
  },
};
</script>

<style>
.containerCard {
  position: relative;
  top: -120px;
}
</style>