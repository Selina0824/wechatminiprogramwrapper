// app.js
import { MENDIX_APP } from './consts'

App({
  onLaunch() {
    // 登录
    wx.login({
      success: (res) => {
        const { code } = res
        console.log(code)
        wx.request({
          url: `${MENDIX_APP.getOpenID(code)}`,
          success: (resp) => {
            console.log(resp)
            wx.setStorageSync('openid', resp.data?.openid)
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
