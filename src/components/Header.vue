<template lang="html">
  <div class="header" :style="{backgroundColor: backgroundColor ? backgroundColor : 'steelblue'}">
    <h1>The Great <br>
      <span id="colorDisplay">{{ color }}</span>
      <br>
      Guessing Game</h1>
  </div>
</template>

<script lang="js">

export default {
  name: 'src-components-header',
  props: {
    color: {
      type: String
    },
    backgroundColor: {
      type: String
    }
  },
  mounted() {
  },
  data() {
    return {}
  },
  methods: {
  },
  computed: {}
}


</script>

<style scoped lang="css">
.header {
  transition: all 0.3s;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
  color: white;
}

#colorDisplay {
  font-size: 200%;
}
</style>
