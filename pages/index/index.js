// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    url:"",
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
      console.log(this.data.canIUseGetUserProfile)
      this.getUserProfile()
    }
  },

  handleLogin(){
    this.getUserProfile()
  },

  getUserProfile(e) {

    wx.getUserProfile({
      desc: '登录系统',
      success: (res) => {
        const {userInfo} = res
        const {nickName, avatarUrl} = userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })

        wx.navigateTo({
          url: `../mendix/mendix?name=${nickName}&avatar=${encodeURIComponent(avatarUrl)}`,
        })
      },
      error : (e) =>{
        console.log(e)
      }
    })
  },

  webViewEventHandere(e){
    console.log(e)
  },

  webViewLoadHander(e){
    console.log(e)
  },

  webViewErrorHander(e){
    console.error(e)
  }
})
