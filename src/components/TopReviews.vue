<template>
  <div>
    <div class="containerTop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        role="img"
        aria-hidden="true"
        class="icon"
      >
        <path :d="mdiPlus"></path>
      </svg>
      <p>Top Reviews</p>
      <div class="containerProfile">
        <img src="/perfil-1.jpg" alt="Perfil 1" />
        <img src="/perfil-2.jpg" alt="Perfil 2" />
        <img src="/perfil-3.jpg" alt="Perfil 3" />
        <div class="moreProfile">9+</div>
      </div>
    </div>
    <div class="containerimg">
      <img class="visitimg small" src="/art-museum.jpg" alt="Arab Street" />
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
          <p>Art Science</p>
          <p>Museum</p>
        </div>
      </div>
    </div>
    <div class="containerimg item2">
      <img class="visitimg medium" src="/Fountain.jpg" alt="Arab Street" />
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
          <p>Fountain</p>
          <p>of Youth</p>
        </div>
      </div>
      <div class="iconCity add">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          class="icon"
        >
          <path :d="mdiPlus"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { mdiPlus, mdiMapMarker } from "@mdi/js";

export default {
  data() {
    return {
      mdiPlus,
      mdiMapMarker,
    };
  },
};
</script>

<style>
.containerTop {
  display: flex;
  align-items: center;
  width: 100%;
  color: #cfced3;
}

.containerTop svg {
  fill: currentColor;
  height: 12px;
  margin-right: 5px;
}

.containerTop p {
  font-size: 12px;
}
.containerProfile {
  margin-left: 15px;
  display: flex;
}
.containerProfile img,
.containerProfile div {
  width: 30px;
  border-radius: 5px;
  border: 2px solid white;
  margin-right: -5px;
}
.moreProfile {
  background-color: #7b66e3;
  color: white;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.small {
  width: 200px;
  height: 100px;
  background-size: contain;
}
.medium {
  width: 200px;
  height: 140px;
  background-size: contain;
  position: relative;
  border-radius: 30px;
}
.item2 {
  margin-top: 10px;
}
.add {
  color: white;
  position: absolute;
  background-color: #7b66e3c0;
  display: flex;
  top: 0;
  right: 50px;
  height: 140px;
  width: 50px;
  border-radius: 30px;
  justify-content: center;
}
</style>