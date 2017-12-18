<template lang="pug">
  section
    h2 {{ this.currentContext.name }}

    div(v-if="isFinish")
      h3 Finish!
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      isFinish: false
    }
  },

  computed: {
    ...mapState([
      'currentTime',
      'currentContext'
    ])
  },

  watch: {
    currentTime (currentTime) {
      if (currentTime === this.currentContext.time) {
        this.isFinish = true
      }
    }
  }
}
</script>
