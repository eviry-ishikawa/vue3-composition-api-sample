<template>
<div @mousemove="updateMousePosition">
  <div >
    {{mousePosition.x}}
    {{mousePosition.y}}
  </div>
  
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePosition } from '../utils/position.ts'
export default defineComponent({
  setup() {
    const { position: mousePosition, updatePosition: updateMousePosition } = usePosition()
    return {
      mousePosition, updateMousePosition
    }
  }
})
</script>
