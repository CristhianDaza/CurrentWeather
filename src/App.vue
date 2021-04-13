<template>
  <div id="app">
    <Banner :current="current" />
    <WeatherMain
      :current="current"
      :description="description"
      :icon="icon"
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
      description: "",
      icon: "",
    };
  },
  components: {
    Banner,
    WeatherMain,
  },
  methods: {
    currentApi() {
      const api = "ffd452f7ae40a393bc21cd201b41cc87";
      const city = "Medellin";

      const xhr = new XMLHttpRequest();

      xhr.addEventListener("load", (data) => {
        this.current = JSON.parse(data.target.response);
        this.description = this.current.weather[0].description;
        this.icon = this.current.weather[0].icon;
      });

      xhr.open(
        "GET",
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
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
