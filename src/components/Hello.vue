<template>
  <div class="hello">
    <ul>
      <li v-for="message in store.messages">{{ message }}</li>
    </ul>
    <input type="text" v-model="newMessage" @keypress.enter="createMessage"/>
  </div>
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator';
  import store from '../store'

  @Component
  export default class Hello extends Vue {
    private store = store;
    private newMessage = '';
    createMessage() {
      store.addMessage(this.newMessage);
      this.newMessage = '';
    }
    mounted() {
      setInterval(() => {
        store.addMessage(`interval added: ${new Date().getTime()}`);
      }, 1000)
    }
  }
</script>

<style scoped>
  .hello {
    color: red;
  }
</style>
