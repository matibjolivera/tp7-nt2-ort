<template>
  <div id="app">
    <Header></Header>
    <Navigator></Navigator>
    <div id="container">
      <Squares></Squares>
    </div>
  </div>
</template>

<script>

import Header from "./components/Header";
import Navigator from "./components/Navigator"
import Squares from "./components/Squares"

export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Squares
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

#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>
