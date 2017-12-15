<template lang="pug">
  #app
    main
      h1 Pomodoro Custom
      timer-component
      custom-component
</template>

<script>
import TimerComponent from './components/TimerComponent'
import CustomComponent from './components/CustomComponent'

export default {
  name: 'app',

  components: {
    TimerComponent,
    CustomComponent
  }
}
</script>
