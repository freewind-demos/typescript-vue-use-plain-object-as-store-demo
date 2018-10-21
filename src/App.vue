<template>
  <div>
    <h1>Home</h1>
    <Hello></Hello>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import Hello from './components/Hello.vue';

  @Component({
    components: {
      Hello
    }
  })
  export default class App extends Vue {
  }
</script>
