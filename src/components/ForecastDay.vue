<template>
<!-- eslint-disable vue/no-use-v-if-with-v-for,vue/no-confusing-v-for-v-if -->
  <div>
    <h2>3 Days <span>Forecast</span></h2>
    <div
      v-for="(forest, index) in result"
      :key="forest.dt" class="forest"
      v-if="index < 3"
    >
      <div class="forest_icon">
        <img
          :src="`https://openweathermap.org/img/wn/${forest.weather[0].icon}.png`"
          :alt="forest.weather[0].description"
        />
      </div>
      <div class="forest_days">
        <div class="forest_day">{{ moment(forest.dt_txt).format('dddd') }}</div>
        <div class="forest_main">{{ forest.weather[0].main }}</div>
      </div>
      <div class="forest_temp">{{ Math.round(forest.main.temp_min) }}° / {{ Math.round(forest.main.temp_max) }}°</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forecast: {},
      result: [],
    };
  },
  methods: {
    currentApi() {
      const api = "ffd452f7ae40a393bc21cd201b41cc87";
      const city = "Bogota";
      const xhr = new XMLHttpRequest();

      xhr.addEventListener("load", (data) => {
        this.forecast = JSON.parse(data.target.response);
        this.forecastDay();
      });

      xhr.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${api}&units=metric`
      );

      xhr.send();
     
    },
    forecastDay() {
      let hash = {}
      const dayFilter = this.forecast.list.filter(current => {
        const exists = !hash[this.moment(current.dt_txt).format('ddd')];
        hash[this.moment(current.dt_txt).format('ddd')] = true;
        return exists;
      });
      dayFilter.forEach(day => {
        if (this.moment(day.dt_txt).format('ddd') !== this.moment(Date.now()).format('ddd')) {
          this.result.push(day);
        }
      })
    }
  },
  created() {
    this.currentApi();
  }
}
</script>

<style>
h2 span {
  font-weight: 300;
}

.forest:first-of-type {
  margin-top: 40px;
}

.forest:first-of-type .forest_temp {
  background-color: #7b66e3;
  color: white;
}

.forest {
  margin-bottom: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  border: 2px solid #ebebeb;
  border-radius: 15px;
  align-items: center;
  height: 80px;
}
.forest_days {
  padding: 0 25px;
}
.forest_day {
  font-weight: 800;
  margin-bottom: 5px;
}
.forest .forest_temp:first-child {
  background-color: #7b66e3;
  color: white;
}
.forest_temp {
  color: black;
  background-color: #dce8f4;
  border-radius: 10px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  padding: 0 10px;
}
</style>