<template lang="pug">
  section
    .row
      .col.s12.m4.center-align
        div(
          v-bind:class="classSelect(pomodoro)"
          @click="setContext(pomodoro)"
        ) Pomodoro
            br
            small ({{ pomodoro.time }})
      .col.s12.m4.center-align
        div(
          :class="classSelect(shortBreak)"
          @click="setContext(shortBreak)"
        ) Short Break
          br
          small ({{ shortBreak.time }})
      .col.s12.m4.center-align
        div(
          :class="classSelect(longBreak)"
          @click="setContext(longBreak)"
        ) Long Break
          br
          small ({{ longBreak.time }})

    .fixed-action-btn
      a(class="btn-floating btn-large red modal-trigger" href="#modal1")
        i.large.material-icons mode_edit

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
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'custom',

  data () {
    return {
      pomodoro: {
        name: 'Pomodoro',
        time: '00:25:00',
        selected: false
      },
      shortBreak: {
        name: 'Short Break',
        time: '00:05:00',
        selected: false
      },
      longBreak: {
        name: 'Long Break',
        time: '00:10:00',
        selected: false
      }
    }
  },

  computed: {
    ...mapState(['currentContext'])
  },

  methods: {
    ...mapMutations([
      'setCurrentContext'
    ]),

    setContext (timer) {
      timer.selected = !timer.selected
      this.setCurrentContext({ currentContext: { name: timer.name, time: timer.time } })
    },

    classSelect (timer) {
      return {
        'deep-orange-text': true,
        'text-lighten-2': true,
        'select': true,
        'selected': timer.name === this.currentContext.name
      }
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
    },

    'pomodoro.selected': function (selected) {
      if (selected) {
        this.longBreak.selected = false
        this.shortBreak.selected = false
      }
    },

    'shortBreak.selected': function (selected) {
      if (selected) {
        this.longBreak.selected = false
        this.pomodoro.selected = false
      }
    },

    'longBreak.selected': function (selected) {
      if (selected) {
        this.shortBreak.selected = false
        this.pomodoro.selected = false
      }
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

  .selected, .select:hover {
    background-color: #f5f5f5;
  }

</style>
