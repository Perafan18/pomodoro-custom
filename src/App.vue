<template lang="pug">
  #app
    h1 {{ title }}
    h2 {{ showTime }}

    section
      button(@click="start") Iniciar
      button(@click="pause") Pausar
      button(@click="stop") Detener
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      title: 'Pomodoro Custom',
      timeout: null,
      seconds: '00',
      minutes: '00',
      hours: 0
    }
  },

  computed: {
    showTime () {
      return `${this.hours}:${this.minutes}:${this.seconds}`
    }
  },

  methods: {
    start () {
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
      clearTimeout(this.timeout)
    },

    stop () {
      this.pause()
      this.seconds = '00'
      this.minutes = '00'
      this.hours = 0
    }
  },

  beforeDestroy () {
    this.pause()
    this.pause()
  }
}
</script>
