<template>
  <div class="banner">
    <h1>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        class="icon"
      >
        <path :d="mdiMapMarker"></path>
      </svg>
      {{ current.name }}
    </h1>
  </div>
</template>

<script>
import { mdiMapMarker } from "@mdi/js";

export default {
  name: "Banner",
  data() {
    return {
      mdiMapMarker,
    };
  },
  props: ["current"],
};
</script>

<style scoped>
.banner {
  color: #7b66e3;
  background-image: url("/city.jpg");
  background-position: top;
  background-size: cover;
  height: 300px;
  margin: 20px;
  padding: 50px;
  border-radius: 25px;
}

h1 {
  margin-top: 20px;
  margin-left: 5px;
  font-size: 25px;
  font-weight: 400;
}

.icon {
  fill: currentColor;
  vertical-align: top;
  width: 25px;
}
</style>