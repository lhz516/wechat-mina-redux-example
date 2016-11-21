# wechat-mina-redux-example
微信小程序整合Redux的例子

- 本案例中在logs.js的onLoad与onUnload里分别sub/unsub。你也可以根据需要在其他Lifecycle函数中sub/unsub
- 本案例中使用setTimeout来模拟远程异步请求，实际情况中可以使用[`redux-thunk`](https://github.com/gaearon/redux-thunk)来实现异步
- 本案例使用Redux底层API实现，你可以使用高阶函数绑定的方法，推荐[`wechat-weapp-redux
`](https://github.com/charleyw/wechat-weapp-redux)
