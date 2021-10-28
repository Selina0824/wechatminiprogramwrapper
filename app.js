// app.js
App({
  onLaunch() {
    // 登录
    wx.login({
      success: (res) => {
        const { code } = res
        wx.setStorageSync('code', code);
      },
    })
  },
  globalData: {
    userInfo: null,
  },
})
