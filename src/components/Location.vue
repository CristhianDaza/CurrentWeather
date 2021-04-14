<template>
  <div class="card">
    <div class="card_title">
      <img
        src="http://openweathermap.org/img/wn/04n.png"
        alt=""
        class="card_title_img"
      />
      <div class="card_title_temp">
        29<span>°C</span><span class="divider"></span>
      </div>
      <div class="card_title_info">
        <div class="card_title_info_city">Lyon</div>
        <div class="card_title_info_country">Francia</div>
      </div>
    </div>
    <div class="card_description">
      <div class="card_description_humidity">Humidity 64%</div>
      <div class="card_description_main">West</div>
      <div class="card_description_wind">0.3km/h</div>
    </div>
  </div>
</template>

<style>
.card {
  border-radius: 25px;
  background: white;
  width: 200px;
  height: 100px;
  margin-bottom: 15px;
}
.card .card_title {
  display: flex;
  justify-content: space-between;
}

.card_title .card_title_img {
  background: #dce8f4;
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