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
          squareColors: this.$store.state.pickedColor,
        })
      } else {
        e.target.style.backgroundColor = '#232323'
        this.$emit('miss')
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