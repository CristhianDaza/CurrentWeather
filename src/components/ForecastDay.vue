<template>
  <div>
    <h2>3 Days <span>Forecast</span></h2>
    <div class="forest">
      <div class="forest_icon">
        <img src="http://openweathermap.org/img/wn/04d.png" alt="" />
      </div>
      <div class="forest_days">
        <div class="forest_day">Lunes</div>
        <div class="forest_main">Rain</div>
      </div>
      <div class="forest_temp">23° / 32°</div>
    </div>
    <div class="forest">
      <div class="forest_icon">
        <img src="http://openweathermap.org/img/wn/04d.png" alt="" />
      </div>
      <div class="forest_days">
        <div class="forest_day">Lunes</div>
        <div class="forest_main">Rain</div>
      </div>
      <div class="forest_temp">23° / 32°</div>
    </div>
    <div class="forest">
      <div class="forest_icon">
        <img src="http://openweathermap.org/img/wn/04d.png" alt="" />
      </div>
      <div class="forest_days">
        <div class="forest_day">Lunes</div>
        <div class="forest_main">Rain</div>
      </div>
      <div class="forest_temp">23° / 32°</div>
    </div>
  </div>
</template>

<style>
h2 span {
  font-weight: 300;
}

.forest:first-of-type {
  margin-top: 40px;
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