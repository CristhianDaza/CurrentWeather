<template>
    <div class="container">
        <ForecastDay />
        <Visit />
        <TopReviews />
        <div class="locations"></div>
    </div>
</template>

<script>
import ForecastDay from "@/components/ForecastDay.vue";
import Visit from "@/components/Visit.vue";
import TopReviews from "@/components/TopReviews.vue";

export default {
    components: {
        ForecastDay,
        Visit,
        TopReviews,
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }
</style>