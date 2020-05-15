<template>
  <section class="WeatherForm">
    <div class="WeatherForm__headline">Temperaturservice</div>
    <div>Für welche Stadt soll die Temperatur ermittelt werden?</div>
    <div class="WeatherForm__form">
      <label for="city">Stadt:</label>
      <input type="text" v-model="city" @focus="clearTemperatureState" />
      <button @click="getWeatherData">ermitteln</button>
    </div>

    <div v-if="weatherData" class="text-left">
      Die Temperaturen in {{ city }} sind
      <ul>
        <li>aktuell {{ weatherData.current }} Grad</li>
        <li>Höchstwert {{ weatherData.max }} Grad</li>
        <li>Tiefstwert {{ weatherData.min }} Grad</li>
      </ul>
    </div>

    <div v-if="!found" class="error">Keine Wetterdaten gefunden. Existiert diese Stadt?</div>
  </section>
</template>

<style src="./WeatherForm.scss" lang="scss"></style>

<script>
import { mapState, mapActions } from "vuex";
import NProgress from "nprogress";

export default {
  data() {
    return {
      city: "",
      found: true
    };
  },
  methods: {
    getWeatherData() {
      NProgress.start();
      this.fetchTemperature(this.city).catch(() => {
        this.found = false;
        setTimeout(() => (this.found = true), 3000);
      });
      NProgress.done();
    },
    ...mapActions("temperature", ["clearTemperatureState", "fetchTemperature"])
  },
  computed: {
    weatherData() {
      return this.temperature.temperature;
    },
    ...mapState(["temperature"])
  }
};
</script>