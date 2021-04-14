<template>
  <div>
    <h2>Place to <span>Visit</span></h2>
    <div class="containerimg">
      <img class="visitimg full" src="/arab-street.jpg" alt="Arab Street" />
      <div class="infoCity">
        <div class="iconCity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
            class="icon"
          >
            <path :d="mdiMapMarker"></path>
          </svg>
        </div>
        <div class="nameCity">
          <p>Arab Street</p>
          <p>Singapore</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiMapMarker } from "@mdi/js";

export default {
  data() {
    return {
      mdiMapMarker,
    };
  },
};
</script>


<style>
.containerimg {
  width: 250px;
  margin-top: 40px;

  position: relative;
}
.visitimg {
  max-width: 100%;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  border-radius: 25px;
}
.containerimg .infoCity {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  font-weight: 800;
  font-size: 12px;
}

.iconCity svg {
  fill: currentColor;
  vertical-align: top;
  width: 20px;
  display: inline-block;
  margin-right: 5px;
}

.infoCity {
  display: flex;
}

.full {
  height: 250px;
}
</style>