<template>
  <div @mousemove="updateMousePosition">
    <div>
      {{mousePosition.x}}
      {{mousePosition.y}}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { positionMixin } from '../mixins/position.ts'

export default defineComponent ({

  mixins: [positionMixin]
  // setup() {
  //   const mousePotision = reactive({
  //     x:0,
  //     y:0
  //   })

  //   const updateMouse = (event) => {
  //     mousePotision.x = event.clientX
  //     mousePotision.y = event.clientY
  //   }

  //   return {
  //     mousePotision,
  //     updateMouse
  //   }
  // }
})
</script>