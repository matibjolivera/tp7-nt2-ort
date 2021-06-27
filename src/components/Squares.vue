<template>
  <section>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
    <div class="square"></div>
  </section>
</template>

<script>

export default {
  name: "Squares",
  components: {},
  data() {
    return {
      colorCount: 0,
      isHard: false,
      colors: [],
      pickedColor: null,
      squares: null,
      colorDisplay: null,
      messageDisplay: null,
      h1: null,
      restartButton: null,
      header: null,
      easyButton: null,
      hardButton: null
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
    setAllColorsTo(color) {
      this.squares.forEach(function (square) {
        square.style.backgroundColor = color;
      })
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
      /*this.colorDisplay.textContent = this.pickedColor;
      this.textContent = "Pick New Colors!";
      this.header.style.backgroundColor = "steelblue";
      this.messageDisplay.textContent = "";
      this.restartButton.textContent = "New Colors!";*/
      for (let i = 0; i < this.squares.length; i++) {
        this.squares[i].style.backgroundColor = this.colors[i];
      }
    }
  },
  mounted() {
    this.colorCount = 6
    this.isHard = true
    this.colors = []
    this.pickedColor = this.colors[this.PickColor()]
    this.squares = document.querySelectorAll(".square")
    //this.colorDisplay = document.getElementById("colorDisplay")
    /*this.messageDisplay = document.getElementById("message")
    this.h1 = document.querySelector("h1")
    this.restartButton = document.querySelector("#reset")
    this.header = document.querySelector("#header")
    this.easyButton = document.querySelector("#easy")
    this.hardButton = document.querySelector("#hard")*/
    for (let i = 0; i < this.squares.length; i++) {
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
      });
    }
    this.restart()
  }
}
</script>

<style scoped>
.square {
  width: 30%;
  background: blue;
  padding-bottom: 30%;
  float: left;
  margin: 1.66%;
  border-radius: 10%;
  transition: background 0.8s;
  -webkit-transition: background 0.8s;
  -moz-transition: background 0.8s;

}
</style>