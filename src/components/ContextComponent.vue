<template lang="pug">
  section
    h2 {{ this.name }}

    div(v-if="isFinish")
      h3 Finish!
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: ['name', 'timeDuration'],

  data () {
    return {
      isFinish: false
    }
  },

  computed: {
    ...mapState([
      'currentTime'
    ])
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
