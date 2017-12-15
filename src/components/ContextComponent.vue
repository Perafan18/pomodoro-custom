<template lang="pug">
  section
    h2 {{ this.title }}

    div(v-if="isFinish")
      h3 Finish!
</template>

<script>
export default {
  props: ['title', 'timeDuration', 'currentTime'],

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
