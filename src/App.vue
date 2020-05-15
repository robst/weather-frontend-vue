<template>
  <div id="app">
    <WeatherForm />
  </div>
</template>

<script>
import WeatherForm from "./components/WeatherForm";

export default {
  name: "App",
  components: {
    WeatherForm
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 5rem;
  max-width: 30rem;
  margin: auto;
}

.text-left {
  text-align: left;
}

.error {
  color: red;
}
</style>
