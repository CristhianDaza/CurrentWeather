<template>
  <div class="container">
    <ForecastDay class="itemForecast" />
    <Visit class="itemForecast" />
    <TopReviews class="itemForecast" />
    <Locations class="itemForecast" />
  </div>
</template>

<script>
import ForecastDay from "@/components/ForecastDay.vue";
import Visit from "@/components/Visit.vue";
import TopReviews from "@/components/TopReviews.vue";
import Locations from "@/components/Locations.vue";

export default {
  components: {
    ForecastDay,
    Visit,
    TopReviews,
    Locations,
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>
