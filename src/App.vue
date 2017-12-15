<template lang="pug">
  #app
    main
      h1 Pomodoro Custom
      timer-component
</template>

<script>
import TimerComponent from './components/TimerComponent'

export default {
  name: 'app',

  components: {
    TimerComponent
  }
}
</script>
