<template lang="pug">
  #app(class="container")
    main(role="main")
      header-component
      custom-component
      timer-component
      context-component
</template>

<script>
import jquery from 'jquery/dist/jquery.min'
import 'materialize-css/dist/js/materialize.min'

import TimerComponent from './components/TimerComponent'
import CustomComponent from './components/CustomComponent'
import ContextComponent from './components/ContextComponent'
import HeaderComponent from './layout/HeaderComponent'

export default {
  name: 'app',

  components: {
    HeaderComponent,
    TimerComponent,
    CustomComponent,
    ContextComponent
  },

  mounted () {
    window.$ = jquery
  }
}
</script>

<style>
@import './assets/css/main.css'
</style>
