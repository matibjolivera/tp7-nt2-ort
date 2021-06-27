<template>
  <div id="app">
    <Header></Header>
    <Navigator></Navigator>
  </div>
</template>

<script>

import Header from "./components/Header";
import Navigator from "./components/Navigator"

export default {
  name: 'App',
  components: {
    Header,
    Navigator
  }
}
</script>

<style>
body {
  background: #232323;
  margin: 0;
  font-family: "Montserrat", "Avenir", serif;
}

h1 {
  font-weight: normal;
  line-height: 1.1;
  padding: 20px 0;

}
</style>
