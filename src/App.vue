<template lang="pug">
  #app(class="container")
    main(role="main")
      h1 Pomodoro Custom
      timer-component
      context-component
      custom-component
</template>

<script>
import TimerComponent from './components/TimerComponent'
import CustomComponent from './components/CustomComponent'
import ContextComponent from './components/ContextComponent'

export default {
  name: 'app',

  components: {
    TimerComponent,
    CustomComponent,
    ContextComponent
  }
}
</script>

<style>
@import './assets/css/main.css'
</style>
