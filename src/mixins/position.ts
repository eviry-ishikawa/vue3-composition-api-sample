export const positionMixin = {
  data() {
    return {
      mousePosition: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    updateMousePosition(event) {
      this.mousePosition.x = event.clientX
      this.mousePosition.y = event.clientY
    }
  }
}