<template>
  <div id="app">
    <Banner :current="current" />
    <WeatherMain
      :current="current"
      :url="url"
      :description="description"
    />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import WeatherMain from "@/components/WeatherMain.vue";

export default {
  name: "App",
  data() {
    return {
      current: {},
      url: "",
      description: "",
    };
  },
  components: {
    Banner,
    WeatherMain,
  },
  methods: {
    currentApi() {
      const api = "ffd452f7ae40a393bc21cd201b41cc87";
      const city = "Bogota";

      const xhr = new XMLHttpRequest();

      xhr.addEventListener("load", (data) => {
        this.current = JSON.parse(data.target.response);
        this.description = this.current.weather[0].description;
      });

      xhr.open(
        "GET",
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
      );

      xhr.send();
      
    },
    image() {
      switch (true) {
        case this.current.weather[0].id >= 200 && this.current.weather[0].id <= 232:
          this.url = "11d.png";
          break;
        case this.current.weather[0].id >= 300 && this.current.weather[0].id <= 321:
          this.url = "09d.png";
          break;
        case this.current.weather[0].id >= 500 && this.current.weather[0].id <= 504:
          this.url = "10d.png";
          break;
        case this.current.weather[0].id == 511:
          this.url = "16d.png";
          break;
        case this.current.weather[0].id >= 520 && this.current.weather[0].id <= 531:
          this.url = "09d.png";
          break;
        case this.current.weather[0].id >= 600 && this.current.weather[0].id <= 622:
          this.url = "13d.png";
          break;
        case this.current.weather[0].id >= 701 && this.current.weather[0].id <= 762:
          this.url = "50d.png";
          break;
        case this.current.weather[0].id == 800:
          this.url = "01d.png";
          break;
        case this.current.weather[0].id == 801:
          this.url = "02d.png";
          break;
        case this.current.weather[0].id == 802:
          this.url = "03d.png";
          break;
        case this.current.weather[0].id == 803 || this.current.weather[0].id == 804:
          this.url = "04d.png";
          break;
        default:
          this.url = "01d.png";
          break;
      }
    },
  },
  created() {
    this.currentApi();
  },
  beforeUpdate() {
    this.image();
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  background-color: #e1e8f0;
}

#app {
  background-color: #fff;
  border-radius: 25px;
  margin: 25px auto;
  max-width: 82%;
  padding: 25PX;
  position: relative;
}
</style>
