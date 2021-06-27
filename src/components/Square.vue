<template>
  <div class="square">

  </div>
</template>

<script>
export default {
  name: "Square"
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

#container {
  margin: 20px auto;
  max-width: 600px;
}
</style>