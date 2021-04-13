<template>
  <div class="weather">
    <div class="main">
      <img :src="tormenta" :alt="current.weather[0].description" />
      <p>{{ current.weather[0].main }}</p>
    </div>
    <div class="temp">
      <p>{{ tempToCelsius }}<span>°C</span></p>
    </div>
  </div>
</template>

<script>
import tormenta from "@/assets/icons/tormenta.svg";

export default {
  name: "WeatherMain",
  props: ["current"],
  data() {
    return {
      tormenta,
    };
  },
  computed: {
    tempToCelsius() {
      return this.current.main.temp - 273.15;
    },
  },
};
</script>

<style>
.weather {
  position: absolute;
  top: 115px;
  left: 0;
  width: 95px;
  border-radius: 20px;
  /* box-shadow: 22px 80px 88px -20px rgba(0, 0, 0, 0.75); */
}

.main,
.temp {
  color: white;
  height: 95px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.main {
  background-color: #31338a;
  border-radius: 20px;
  position: relative;
  z-index: 10;
  flex-direction: column;
}

.main img {
  width: 40px;
}

.main p {
  font-size: 10px;
  margin-top: 5px;
}

.main::after {
  content: "";
  background: white;
  height: 30%;
  left: 0;
  position: absolute;
  right: 67px;
  top: 0;
  transform: translate(0px, -29px);
  transform-origin: 100% 0;
  border-bottom-left-radius: 15px;
  z-index: 10;
}

.main::before {
  content: "";
  background: inherit;
  height: 30%;
  left: 0;
  position: absolute;
  right: 67px;
  top: 0;
  transform: translate(0px, -10px);
  transform-origin: 100% 0;
  z-index: 5;
}

.temp {
  background-color: #7b66e3;
  margin-top: -15px;
  border-bottom-right-radius: 20px;
}

.temp p {
  font-size: 35px;
  margin-top: 5px;
}

.temp p span {
  font-size: 15px;
  position: relative;
  bottom: 14px;
}

.temp::after {
  content: "";
  background: white;
  height: 15%;
  left: 0;
  position: absolute;
  right: 67px;
  bottom: 0;
  transform: translate(0px, 26px);
  transform-origin: 100% 0;
  border-top-left-radius: 15px;
  z-index: 10;
}

.temp::before {
  content: "";
  background: inherit;
  height: 30%;
  left: 0;
  position: absolute;
  right: 67px;
  bottom: 0;
  transform: translate(0px, 12px);
  transform-origin: 100% 0;
  z-index: 5;
}
</style>