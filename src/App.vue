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
      showTime: '0:0:00',
      seconds: 0,
      minutes: 0,
      hours: 0
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
        this.seconds = 0
      }

      if (this.minutes >= 60) {
        this.hours++
        this.minutes = 0
      }

      this.showTime = `${this.hours}:${this.minutes}:${this.seconds}`
    },

    pause () {
      clearTimeout(this.timeout)
    },

    stop () {
      this.pause()
      this.seconds = 0
      this.minutes = 0
      this.hours = 0
      this.showTime = '0:0:00'
    }
  },

  beforeDestroy () {
    this.pause()
  }
}
</script>
