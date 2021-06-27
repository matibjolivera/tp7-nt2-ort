<template>
  <div id="app">
    <Header :color="hPickedColor" :backgroundColor="hBackgroundColor"></Header>
    <Navigator :message="nMessage" :messageColor="nMessageColor" :reset="nReset"></Navigator>
    <div id="container">
      <Game v-on:restart="restart" v-on:win="win" v-on:miss="miss"></Game>
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
      hBackgroundColor: null,
      nMessage: '',
      nReset: 'New colors',
      nMessageColor: '#fff'
    }
  },
  methods: {
    restart(payload) {
      this.hPickedColor = payload.hPickedColor
      this.nMessage = payload.nMessage
    },
    win(payload) {
      this.nMessage = payload.nMessage
      this.nMessageColor = '#000'
      this.nReset = payload.nReset
      this.hBackgroundColor = payload.winColor
    },
    miss(payload) {
      this.nMessage = payload.nMessage
      this.nMessageColor = '#000'
    }
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
