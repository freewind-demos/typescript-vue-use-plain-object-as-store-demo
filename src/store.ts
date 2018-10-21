function runLater(fn: () => void, time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve()
    }, time)
  })
}
const store = {
  messages: new Array<string>(),
  addMessage: (message: string) => {
    store.messages.push(message)
  },
  initMessages: async () => {
    await runLater(() => {
      store.addMessage('init message')
    }, 1000)
  }
};

export default store;
