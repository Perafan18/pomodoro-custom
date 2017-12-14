<template lang="pug">
  #app
    h1 {{ title }}
    h2 {{ showTime }}
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Pomodoro Custom',
      timeout: null,
      showTime: '',
      seconds: 0,
      minutes: 0,
      hours: 0
    }
  },

  mounted () {
    this.timeout = setInterval(() => this.initTime(), 1000)
  },

  methods: {
    initTime () {
      this.seconds++

      if (this.seconds <= 9) {
        this.seconds = '0' + this.seconds
      }

      if (this.seconds >= 60) {
        this.minutes++
        this.seconds = 0
      }

      if (this.minutes >= 60) {
        this.hours++
        this.minutes = 0
      }

      this.showTime = `${this.hours}:${this.minutes}:${this.seconds}`
    }
  },

  beforeDestroy () {
    clearTimeout(this.timeout)
  }
}
</script>
