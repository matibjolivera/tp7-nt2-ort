<template>
  <section>
    <Square
        v-for="(c,i) in colors" :key="i"
        :color="c"
        :pickedColor="pickedColor"
        :currentColor="winColor"
        v-on:win="win"
        v-on:miss="miss"
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
      isHard: false,
      colors: [],
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
    start() {
      this.colorCount = 6
      this.isHard = true
      this.winColor = null
      this.colors = []
      this.colors = this.createNewColors(this.colorCount);
      this.pickedColor = this.colors[this.PickColor()];
      this.$emit('start', {
        hPickedColor: this.pickedColor,
        nMessage: "",
        nReset: "New Colors!"
      })
    },
    win(payload) {
      this.winColor = this.pickedColor
      payload.winColor = this.winColor
      this.$emit('win', payload)
    },
    miss(payload) {
      this.$emit('miss', payload)
    },
  },
  created() {
    this.start()
  }
}
</script>

<style scoped>
</style>