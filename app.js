// app.js
import { MENDIX_APP } from './consts'

App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: (res) => {
        const { code } = res
        console.log(code)
        wx.request({
          url: `${MENDIX_APP.getOpenID(code)}`,
          success: (resp) => {
            console.log(resp)
          },
          fail: (e) => {
            console.log(e)
          },
        })
      },
    })
  },
  globalData: {
    userInfo: null,
  },
})
