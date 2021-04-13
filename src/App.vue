<template>
  <div id="app">
    <Banner :current="current" />
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: "App",
  data() {
    return {
      current: {},
    };
  },
  components: {
    Banner,
  },
  methods: {
    currentApi() {
      const api = "ffd452f7ae40a393bc21cd201b41cc87";
      const city = "Bogota";

      const xhr = new XMLHttpRequest();

      xhr.addEventListener("load", (data) => {
        this.current = JSON.parse(data.target.response);
      });

      xhr.open(
        "GET",
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`
      );

      xhr.send();
    },
  },
  mounted() {
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
}
</style>
