<template>
  <div id="app">
    <div>
      Mixin
      <PositionMixin/>
    </div>
    <div>
      usePosition
      <Position/>
    </div>
  </div>
</template>

<script>
import PositionMixin from './components/PositionMixin.vue'
import Position from './components/Position.vue'

export default {
  name: 'App',
  components: {
    PositionMixin,
    Position
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
