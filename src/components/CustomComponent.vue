<template lang="pug">
  section
    .row
      .col.s12.m4.center-align
        span(
          class="deep-orange-text text-lighten-2 select"
          @click="setContext(pomodoro.name, pomodoro.time)"
        ) Pomodoro
            br
            small ({{ pomodoro.time }})
      .col.s12.m4.center-align
        span(
          class="deep-orange-text text-lighten-2 select"
          @click="setContext(shortBreak.name, shortBreak.time)"
        ) Short Break
          br
          small ({{ shortBreak.time }})
      .col.s12.m4.center-align
        span(
          class="deep-orange-text text-lighten-2 select"
          @click="setContext(longBreak.name, longBreak.time)"
        ) Long Break
          br
          small ({{ longBreak.time }})

    <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
    div(class="modal bottom-sheet" id="modal1")
      .modal-content
        .row
          h4.center-align Set Custom Times
        .row
          .col.s12.m4
            label(for="pomodoroTime" class="deep-orange-text text-lighten-2") Pomodoro time:
            input(v-model="pomodoro.time" type="text" id="pomodoroTime")
          .col.s12.m4
            label(for="shortBreakTime" class="deep-orange-text text-lighten-2") Short break time:
            input(v-model="shortBreak.time" type="text" id="shortBreakTime")
          .col.s12.m4
            label(for="longBreakTime" class="deep-orange-text text-lighten-2") Long break time:
            input(v-model="longBreak.time" type="text" id="longBreakTime")
      .modal-footer
        a(class="modal-action modal-close waves-effect waves-green btn-flat") Ok
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

  mounted () {
    window.$('.modal').modal()
  }
}
</script>

<style scoped>
  .select {
    font-size: 25pt;
    cursor: pointer;
  }
</style>
