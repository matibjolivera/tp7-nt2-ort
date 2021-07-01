<template>
  <div id="app">
    <Header></Header>
    <Navigator v-on:restart="restart"
               v-on:changeToEasy="changeToEasy()" v-on:changeToHard="changeToHard()"></Navigator>
    <div id="container">
      <Game v-on:start="start" v-on:win="win" v-on:miss="miss" ref="game"></Game>
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
  methods: {
    start() {
      this.$store.dispatch('changeValue', {
        property: 'nReset',
        value: 'New colors'
      })
      this.$store.dispatch('changeValue', {
        property: 'hBackgroundColor',
        value: 'steelblue'
      })
    },
    restart() {
      this.$refs.game.start(this.$store.state.isHard ? 6 : 3, this.$store.state.isHard)
    },
    changeToEasy() {
      if (this.$store.state.isHard) {
        this.$store.dispatch('changeValue', {
          property: 'isHard',
          value: false
        })
        this.$refs.game.changeToEasy()
      }
    },
    changeToHard() {
       if (!this.$store.state.isHard) {
        this.$store.dispatch('changeValue', {
          property: 'isHard',
          value: true
        })
        this.$refs.game.changeToHard()
      }
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
