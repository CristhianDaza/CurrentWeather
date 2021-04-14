<template>
  <div class="card">
    <div class="card_title">
      <img
        v-if="location.weather !== undefined"
        :src="`http://openweathermap.org/img/wn/${location.weather[0].icon}.png`"
        alt=""
        class="card_title_img"
      />
      <div class="card_title_temp" v-if="location.main !== undefined">
        {{ Math.round(location.main.temp) }}<span>°C</span
        ><span class="divider"></span>
      </div>
      <div class="card_title_info">
        <div class="card_title_info_city">{{ city }}</div>
        <div class="card_title_info_country">{{ country }}</div>
      </div>
    </div>
    <div class="card_description">
      <div class="card_description_humidity" v-if="location.main !== undefined">
        Humidity {{ location.main.humidity }}%
      </div>
      <div class="card_description_main" v-if="location.main !== undefined">
        {{ location.weather[0].main }}
      </div>
      <div class="card_description_wind" v-if="location.wind !== undefined">
        {{ (location.wind.speed * 3.6).toFixed(2) }}km/h
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: {},
    };
  },
  props: ["city", "country", "codigo"],
  methods: {
    currentApi() {
      const api = "ffd452f7ae40a393bc21cd201b41cc87";

      const xhr = new XMLHttpRequest();

      xhr.addEventListener("load", (data) => {
        this.location = JSON.parse(data.target.response);
      });

      xhr.open(
        "GET",
        `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.codigo}&appid=${api}&units=metric`
      );

      xhr.send();
    },
  },

  created() {
    this.currentApi();
  },
};
</script>

<style>
.card {
  border-radius: 25px;
  background: white;
  /* width: 250px; */
  height: 100px;
  margin-bottom: 15px;
  box-shadow: -13px 46px 133px -13px rgba(0,0,0,0.56);
  -webkit-box-shadow: -13px 46px 133px -13px rgba(0,0,0,0.56);
  -moz-box-shadow: -13px 46px 133px -13px rgba(0,0,0,0.56);
}
.card .card_title {
  display: flex;
  justify-content: space-between;
}

.card_title .card_title_img {
  background: #dde7f6;
  border-radius: 15px;
  width: 70px;
}

.card_title .card_title_temp {
  display: flex;
  align-items: center;
  font-size: 25px;
  font-weight: 800;
  margin-left: 15px;
}
.card_title .card_title_temp span:first-child {
  font-size: 10px;
  font-weight: 300;
  color: #707070;
  position: relative;
  top: -5px;
  display: flex;
  align-items: center;
}

.card_title .divider {
  border-left: 1px solid #dfe1e5;
  height: 55%;
  margin: 0 10px;
}

.card_title .card_title_info {
  display: flex;
  justify-content: center;
  margin-right: 25px;
  flex-direction: column;
}

.card_title .card_title_info .card_title_info_city {
  font-weight: 800;
}
.card_title .card_title_info .card_title_info_country {
  font-weight: 300;
  font-size: 10px;
}

.card_description {
  display: flex;
  color: #777777;
  font-size: 10px;
  justify-content: space-around;
  padding: 10px 0;
}
</style>