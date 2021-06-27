<template>
  <div id="app">
    <Header :color="hPickedColor" :backgroundColor="hBackgroundColor"></Header>
    <Navigator :message="nMessage" :reset="nReset"></Navigator>
    <div id="container">
      <Game v-on:restart="restart"></Game>
    </div>
  </div>
</template>

<script>

import Header from "./components/Header";
import Navigator from "./components/Navigator"
import Game from "./components/Game"

export default {
  name: 'App',
  components: {
    Header,
    Navigator,
    Game
  },
  data() {
    return {
      hPickedColor: '',
      hBackgroundColor: '',
      nMessage: '',
      nReset: 'New colors'
    }
  },
  methods: {
    restart(payload) {
      this.hPickedColor = payload.hPickedColor
      this.hBackgroundColor = payload.hBackgroundColor
      this.nMessage = payload.nMessage
    },
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
