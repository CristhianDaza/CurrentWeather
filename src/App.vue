<template>
  <div>
    <div class="logo">
      <img :src="Logo" alt="Logo Web" class="logotipo">
    </div>
    <div id="app">
      <Banner :current="current" />
      <WeatherMain :current="current" :description="description" :icon="icon" />
      <section>
        <Forecast />
      </section>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import WeatherMain from "@/components/WeatherMain.vue";
import Forecast from "@/components/Forecast.vue";
import Logo from '@/assets/Logo.png';

export default {
  name: "App",
  data() {
    return {
      current: {},
      description: "",
      icon: "",
      Logo,
    };
  },
  components: {
    Banner,
    WeatherMain,
    Forecast,
  },
  methods: {
    currentApi() {
      const api = "ffd452f7ae40a393bc21cd201b41cc87";
      const city = "Bogota";

      const xhr = new XMLHttpRequest();

      xhr.addEventListener("load", (data) => {
        this.current = JSON.parse(data.target.response);
        this.description = this.current.weather[0].description;
        this.icon = this.current.weather[0].icon;
      });

      xhr.open(
        "GET",
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`
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
  font-family: "Roboto", sans-serif;
  background-color: #e1e8f0;
}

#app {
  background-color: #fff;
  border-radius: 25px;
  margin: 25px auto;
  max-width: 80%;
  padding: 25px 25px 0 25px;
  position: relative;
   box-shadow: 20px 20px 100px -13px rgba(0,0,0,0.56);
  -webkit-box-shadow: 20px 20px 100px -13px rgba(0,0,0,0.56);
  -moz-box-shadow: 20px 20px 100px -13px rgba(0,0,0,0.56);
}

section {
  margin: 45px 0 0 20px;
}

.logo {
  display: flex;
  justify-content: flex-end;
}

.logotipo {
  width: 40px;
  margin: 20px 100px 5px 0;
}

@media screen and (min-width: 320px) and (max-width: 767px){
  #app {
    max-width: 95%;
    padding: 10px 10px 0 10px;
  }

  .weather {
    top: 95px;
  }

  .banner h1 {
    font-size: 40px;
  }

  .banner h1 .icon {
    widows: 50px;
    display: flex;
    align-items: center;
  }

  .itemForecast {
    margin-bottom: 50px;
  }

  .forest {
    width: 100%;
  }
  
  .containerCard {
    position: static;
  }

  .small, .medium {
    max-width: 100%;
    width: 100%;
  }

  .add {
    right: 0;
  }
  .container {
    justify-content: space-between;
  }
  .containerimg .imgArab {
    box-shadow: -13px 46px 133px -13px rgba(0,0,0,0.56);
    -webkit-box-shadow: -13px 46px 133px -13px rgba(0,0,0,0.56);
    -moz-box-shadow: -13px 46px 133px -13px rgba(0,0,0,0.56);
  }
}

@media screen and (min-width: 768px) and (max-width: 1332px) {
  .containerCard {
    position: static;
  }
  
  .itemForecast {
    margin: 10px;
  }
}
@media screen and (min-width: 1333px) and (max-width: 1440px) {
  .itemForecast {
    right: 50px;
  }
}

</style>
