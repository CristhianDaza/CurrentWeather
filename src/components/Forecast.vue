<template>
    <div class="container">
        <ForecastDay />
        <div class="visit"></div>
        <div class="top"></div>
        <div class="locations"></div>
    </div>
</template>

<script>
import ForecastDay from "@/components/ForecastDay.vue"
export default {
    components: {
        ForecastDay,
    }
}
</script>

<style scoped>
    .container {
        display: flex;
    }
</style>