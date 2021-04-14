<template>
<div class="containerCard">
  <Location />
</div>
</template>

<script>
import Location from '@/components/Location.vue'
export default {
    components: {
        Location,
    }
}
</script>

<style>
    
.containerCard {
    position: relative;
    top: -120px;
}
</style>