<template lang="pug">
  section(class="row center-align")
    h1 {{ showTime }}

    button(:disabled="isRunning" @click="start" class="btn-large waves-effect waves-light")
      i(class="large material-icons center" ) play_arrow
    button(@click="pause" class="btn-large waves-effect waves-light")
      i(class="large material-icons center") pause
    button(@click="stop" class="btn-large waves-effect waves-light")
      i(class="large material-icons center") stop
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'timer',

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

<style scoped>
  .btn-large {
    margin: 20px;
  }

  h1 {
    font-size: 5rem;
  }
</style>
