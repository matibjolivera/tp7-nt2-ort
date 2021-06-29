<template>
  <section>
    <Square
        v-for="(s,i) in squares" :key="i"
        :color="s.color"
        :pickedColor="pickedColor"
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
      isHard: true,
      colors: [],
      squares: [],
      pickedColor: null,
      winColor: null
    }
  },
  methods: {
    PickColor() {
      let quantity;
      if (this.isHard) {
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
    start(colorCount = 6, isHard = true) {
      this.colorCount = colorCount
      this.isHard = isHard
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
      this.$emit('start', {
        hPickedColor: this.$store.state.pickedColor,
        nMessage: "",
        nReset: "New Colors!"
      })
    },
    win(payload) {
      this.winColor = this.$store.state.pickedColor
      payload.winColor = this.winColor
      this.$emit('win', payload)
    },
    miss(payload) {
      this.$emit('miss', payload)
    },
    changeToEasy() {
      if (this.isHard) {
        this.start(3, false);
      }
    },
    changeToHard() {
      if (!this.isHard) {
        this.start(6, true);
      }
    },
    changeSquareColor(payload) {
      payload.square.style.backgroundColor = payload.color
    }
  },
  created() {
    this.start()
  }
}
</script>

<style scoped>
</style>