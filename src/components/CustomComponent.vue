<template lang="pug">
  section
    .row
      .col.s12.m4.center-align
        span(class="deep-orange-text text-lighten-2 select" @click="setContext(pomodoro.name, pomodoro.time)") Pomodoro
      .col.s12.m4.center-align
        span(class="deep-orange-text text-lighten-2 select" @click="setContext(shortBreak.name, shortBreak.time)") Short Break
      .col.s12.m4.center-align
        span(class="deep-orange-text text-lighten-2 select" @click="setContext(longBreak.name, longBreak.time)") Long Break
    form()
      label(for="pomodoroTime") Pomodoro time:
      input(v-model="pomodoro.time" type="text" id="pomodoroTime")
      label(for="shortBreakTime") Short break time:
      input(v-model="shortBreak.time" type="text" id="shortBreakTime")
      label(for="longBreakTime") Long break time:
      input(v-model="longBreak.time" type="text" id="longBreakTime")
    p {{ getCustom }}
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'custom',

  data () {
    return {
      pomodoro: {
        name: 'Pomodoro',
        time: '00:25:00'
      },
      shortBreak: {
        name: 'Short Break',
        time: '00:05:00'
      },
      longBreak: {
        name: 'Long Break',
        time: '00:10:00'
      }
    }
  },

  methods: {
    ...mapMutations([
      'setCurrentContext'
    ]),

    setContext (name, time) {
      this.setCurrentContext({ currentContext: { name, time } })
    }
  },

  watch: {
    'pomodoro.time': function () {
      this.setContext(this.pomodoro.name, this.pomodoro.time)
    },

    'shortBreak.time': function () {
      this.setContext(this.shortBreak.name, this.shortBreak.time)
    },

    'longBreak.time': function () {
      this.setContext(this.longBreak.name, this.longBreak.time)
    }
  },

  computed: {
    getCustom () {
      return `
        Pomodoro time: ${this.pomodoro.time}
        Short break time: ${this.shortBreak.time}
        Long break time: ${this.longBreak.time}
      `
    }
  }
}
</script>

<style scoped>
  .select {
    font-size: 25pt;
    cursor: pointer;
  }
</style>
