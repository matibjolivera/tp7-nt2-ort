<template>
  <section>
    <Square
        v-for="(s,i) in squares" :key="i"
        :color="s.color"
        :currentColor="winColor"
        v-on:win="win"
        v-on:miss="miss"
        v-on:changeSquareColor="changeSquareColor"
        :display="s.display"
    >
    </Square>
  </section>
</template>

<script>

import Square from "./Square"

export default {
  name: "Game",
  components: {
    Square
  },
  data() {
    return {
      colorCount: 0,
      colors: [],
      squares: [],
      winColor: null
    }
  },
  methods: {
    PickColor() {
      let quantity;
      if (this.$store.state.isHard) {
        quantity = 6;
      } else {
        quantity = 3;
      }
      return Math.floor(Math.random() * quantity);
    },
    createNewColors(numbers) {
      let arr = [];
      for (let i = 0; i < numbers; i++) {
        arr.push(this.createRandomStringColor());
      }
      return arr;
    },
    createRandomStringColor() {
      return "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")";
    },
    randomInt() {
      return Math.floor(Math.random() * 256);
    },
    start(colorCount = 6) {
      this.colorCount = colorCount
      this.winColor = null
      this.colors = []
      this.squares = []
      this.colors = this.createNewColors(this.colorCount);
      this.colors.forEach(c => {
        this.squares.push({
          color: c,
          display: 'block'
        })
      })
      this.$store.state.pickedColor = this.colors[this.PickColor()];
      this.$store.dispatch('changeValue', {
        property: 'nMessage',
        value: ''
      })
      this.$emit('start')
    },
    win() {
      this.winColor = this.$store.state.pickedColor
      this.$store.dispatch('changeValue', {
        property: 'nMessage',
        value: 'You Picked Right!'
      })
      this.$store.dispatch('changeValue', {
        property: 'nReset',
        value: 'Play Again!'
      })
      this.$store.dispatch('changeValue', {
        property: 'hBackgroundColor',
        value: this.$store.state.pickedColor
      })
      this.$store.dispatch('changeValue', {
        property: 'nMessageColor',
        value: '#000'
      })
    },
    miss() {
      this.$store.dispatch('changeValue', {
        property: 'nMessageColor',
        value: '#000'
      })
      this.$store.dispatch('changeValue', {
        property: 'nMessage',
        value: 'Try Again!'
      })
      this.$store.dispatch('changeValue', {
        property: 'nMessageColor',
        value: '#000000'
      })
    },
    changeToEasy() {
      this.start(3, false);
    },
    changeToHard() {
      this.start(6, true);
    },
  },
  created() {
    this.start()
  }
}
</script>

<style scoped>
</style>