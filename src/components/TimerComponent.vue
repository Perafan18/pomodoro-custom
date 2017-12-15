<template lang="pug">
  section
    h2 {{ showTime }}

    section
      button(:disabled="isRunning" @click="start") Start
      button(@click="pause") Pause
      button(@click="stop") Stop
    context-component(
      name="Test"
      timeDuration="0:00:10"
    )
</template>

<script>
import { mapMutations } from 'vuex'

import ContextComponent from './ContextComponent'

export default {
  name: 'timer',

  components: {
    ContextComponent
  },

  data () {
    return {
      timeout: null,
      seconds: '00',
      minutes: '00',
      hours: 0,
      isRunning: false
    }
  },

  computed: {
    showTime () {
      return `${this.hours}:${this.minutes}:${this.seconds}`
    }
  },

  methods: {
    ...mapMutations([
      'setCurrentTime'
    ]),

    start () {
      if (this.isRunning) return
      this.isRunning = true
      this.timeout = setInterval(() => this.initTime(), 1000)
    },

    initTime () {
      this.seconds++

      if (this.seconds <= 9) {
        this.seconds = '0' + this.seconds
      }

      if (this.seconds >= 60) {
        this.minutes++
        this.seconds = '00'

        if (this.minutes <= 9) {
          this.minutes = '0' + this.minutes
        }
      }

      if (this.minutes >= 60) {
        this.hours++
        this.minutes = 0
      }
    },

    pause () {
      this.isRunning = false
      clearTimeout(this.timeout)
    },

    stop () {
      this.pause()
      this.seconds = '00'
      this.minutes = '00'
      this.hours = 0
    }
  },

  watch: {
    seconds (seconds) {
      this.setCurrentTime({ currentTime: this.showTime })
    }
  },

  beforeDestroy () {
    this.pause()
    this.pause()
  }
}
</script>
