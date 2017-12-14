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
      title: 'Welcome to Your Vue.js App',
      timeout: null,
      showTime: ''
    }
  },

  mounted () {
    this.timeout = setInterval(() => this.getTime(), 1000)
  },

  methods: {
    getTime () {
      let datetime = new Date()
      let hour = datetime.getHours()
      let min = datetime.getMinutes()
      let sec = datetime.getSeconds()

      this.showTime = `${hour}:${min}:${sec}`
    }
  },

  beforeDestroy () {
    clearTimeout(this.timeout)
  }
}
</script>
