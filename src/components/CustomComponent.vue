<template lang="pug">
  section
    h2 Custom
    form
      label(for="pomodoroTime") Pomodoro time:
      input(v-model="pomodoroTime" type="number" id="pomodoroTime")
      label(for="shortBreakTime") Short break time:
      input(v-model="shortBreakTime" type="number" id="shortBreakTime")
      label(for="longBreakTime") Long break time:
      input(v-model="longBreakTime" type="number" id="longBreakTime")
</template>

<script>
export default {
  data () {
    return {
      pomodoroTime: 25,
      shortBreakTime: 5,
      longBreakTime: 10
    }
  },

  computed: {
    getCustom () {
      return `
        Pomodoro time: ${this.pomodoroTime}
        Short break time:
      `
    }
  }
}
</script>
