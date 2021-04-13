<template>
    <div class="container">
        <ForecastDay />
        <Visit />
        <div class="top"></div>
        <div class="locations"></div>
    </div>
</template>

<script>
import ForecastDay from "@/components/ForecastDay.vue";
import Visit from "@/components/Visit.vue";

export default {
    components: {
        ForecastDay,
        Visit,
    }
}
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }
</style>