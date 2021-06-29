<template>
  <div>
    <div class="square" :style="{backgroundColor: currentColor ? currentColor : color, display: display}"
         v-on:click="clickSquare">
    </div>
  </div>
</template>

<script>
export default {
  name: "Square",
  props: {
    color: {
      type: String
    },
    currentColor: {
      type: String
    },
    display: {
      type: String
    }
  },
  methods: {
    clickSquare(e) {
      let clickedColor = e.target.style.backgroundColor;
      if (clickedColor === this.$store.state.pickedColor) {
        this.$emit('win', {
          nMessage: 'You Picked Right!',
          squareColors: this.$store.state.pickedColor,
          nReset: 'Play Again!',
          hBackgroundColor: this.$store.state.pickedColor
        })
      } else {
        this.$emit('changeSquareColor', {
          square: e.target,
          color: '#232323'
        })
        this.$emit('miss', {
          nMessage: "Try Again!",
          nMessageColor: "#000000"
        })
      }
    }
  },
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