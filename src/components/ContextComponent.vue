<template lang="pug">
  section
    h2 {{ this.name }}

    div(v-if="isFinish")
      h3 Finish!
</template>

<script>
export default {
  props: ['name', 'timeDuration', 'currentTime'],

  data () {
    return {
      isFinish: false
    }
  },

  watch: {
    currentTime (currentTime) {
      if (currentTime === this.timeDuration) {
        this.isFinish = true
      }
    }
  }
}
</script>
