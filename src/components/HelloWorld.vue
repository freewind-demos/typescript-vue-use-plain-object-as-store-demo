<template>
  <div class="hello">
    <input type="text" v-model="store.message"/>
    {{ store.message }}
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import store from '../store'

  @Component
  export default class HelloWorld extends Vue {
    private store = store;
  }
</script>

<style scoped>
  .hello {
    color: red;
  }
</style>
