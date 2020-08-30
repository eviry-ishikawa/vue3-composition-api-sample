<template>
  <div>
    {{msg}}
    <button @click="setMsg">
      fix
    </button>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  props: {
    message: {
      type: String,
    }
  },
  setup(props) {
    let msg = ref("initial message") 
    const setMsg = () => {
      msg.value = props.message
    }
    return {
      msg,
      setMsg
    }
  }
})
</script>