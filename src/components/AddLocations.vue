<template>
    <div class="cardAddLocations">
        <div class="cardAddLocations_button">
            Add Locations
        </div>
        <div class="cardAddLocations_img">
            <img src="/locations.svg" alt="">
        </div>
    </div>
</template>

<style>
    .cardAddLocations {
        width: 260px;
        border: 1px dashed #c2c2c2;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 25px;
        background-color: white;
    }
    .cardAddLocations .cardAddLocations_img img{
        width: 200px;
    }

    .cardAddLocations .cardAddLocations_button{
        background-color: #c0b8f773;
        color: #7b66e3;
        width: 140px;
        height: 30px;
        border-radius: 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 25px;
        font-size: 12px;
    }
</style>