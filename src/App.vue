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
    <div>
      <Message  message='props message'/>
    </div>
  </div>
</template>

<script>
import PositionMixin from './components/PositionMixin.vue'
import Position from './components/Position.vue'
import Message from './components/Message.vue'

export default {
  name: 'App',
  components: {
    PositionMixin,
    Position,
    Message
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
