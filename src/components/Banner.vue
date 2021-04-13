<template>
  <div>
    <h1>{{current.name}}</h1>
  </div>
</template>

<script>
export default {
  name: "Banner",
  props: ["current"],
};
</script>