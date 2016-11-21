//logs.js
const app = getApp()
const Store = app.Store
const dispatch = Store.dispatch

Page({
  data: {
    foo: ''
  },
  onLoad() {
    this.unsubStore = Store.subscribe(() => {
      const foo = Store.getState().myText
      this.setData({ foo })
    })
  },
  onUnload() {
    this.unsubStore()
  }
})
