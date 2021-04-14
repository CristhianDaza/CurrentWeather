<template>
  <div class="weather">
    <div class="main">
      <img :src="`http://openweathermap.org/img/wn/${icon}.png`" :alt="description" />
      <p v-if="current.weather !== undefined">{{ current.weather[0].main }}</p>
    </div>
    <div class="temp">
      <p v-if="current.main !== undefined">{{ Math.round(current.main.temp) }}<span>°C</span></p>
    </div>
  </div>
</template>

<script>

export default {
  name: "WeatherMain",
  props: ["current", "description", "icon"],
  data() {
    return {};
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
  width: 70px;
}

.main p {
  font-size: 10px;
  margin-top: -10px;
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
  height: 10%;
  left: 0;
  position: absolute;
  right: 67px;
  bottom: 0;
  transform: translate(0px, 12px);
  transform-origin: 100% 0;
  z-index: 5;
}
</style>