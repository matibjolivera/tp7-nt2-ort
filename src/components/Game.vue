<template>
  <section>
    <Square
        v-for="(c,i) in colors" :key="i"
        :color="c"
        :pickedColor="pickedColor"
        v-on:win="win"
        :winColor="winColor"
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
    restart() {
      this.colors = this.createNewColors(this.colorCount);
      this.pickedColor = this.colors[this.PickColor()];
      this.$emit('restart', {
        hPickedColor: this.pickedColor,
        nMessage: "",
        nReset: "New Colors!"
      })
    },
    win(payload) {
      this.winColor = this.pickedColor
      payload.winColor = this.winColor
      this.$emit('win', payload)
    }
  },
  created() {
    this.colorCount = 6
    this.isHard = true
    this.colors = []
    /*    this.squares = document.querySelectorAll(".square")
        this.colorDisplay = document.getElementById("colorDisplay")
        this.messageDisplay = document.getElementById("message")
        this.h1 = document.querySelector("h1")
        this.restartButton = document.querySelector("#reset")
        this.header = document.querySelector("#header")
        this.easyButton = document.querySelector("#easy")
        this.hardButton = document.querySelector("#hard")
        for (let i = 0; i < this.quantitySquares; i++) {
        this.squares[i].style.backgroundColor = this.colors[i];
        this.squares[i].addEventListener("click", function () {
          let clickedColor = this.style.backgroundColor;
          if (clickedColor === this.pickedColor) {
            this.messageDisplay.textContent = "You Picked Right!";
            this.setAllColorsTo(this.pickedColor);
            this.restartButton.textContent = "Play Again!";
            this.header.style.backgroundColor = this.pickedColor;
          } else {
            this.style.backgroundColor = "#232323";
            this.messageDisplay.textContent = "Try Again!";
            this.messageDisplay.style.color = "#000000";
          }
        })
      }*/
    this.restart()
  }
}
</script>

<style scoped>
</style>