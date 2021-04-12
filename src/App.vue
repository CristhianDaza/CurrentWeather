<template>
  <div id="app">
    <h1>Current Weather</h1>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    currentApi() {
      const api = "ffd452f7ae40a393bc21cd201b41cc87";
      const city = "Bogota";

      const xhr = new XMLHttpRequest();

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          console.log(this.responseText);
        }
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
</style>
