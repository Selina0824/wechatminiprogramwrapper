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
        const {userInfo} = res;
        wx.setStorageSync('userInfo',userInfo);
        wx.redirectTo({
          url: `../mendix/mendix`,
        })
      },
      error : (e) =>{
        console.log(e)
      }
    })
  },
  handleLoginToWechatAPIExplorer(){
    const userInfo = {
      avatarUrl: "https://thirdwx.qlogo.cn/mmopen/vi_32/POgEwh4mIHO4nibH0KlMECNjjGxQUq24ZEaGT4poC6icRiccVGKSyXwibcPq4BWmiaIGuG1icwxaQX6grC9VemZoJ8rg/132",
      nickName: "微信用户"
    };
    wx.setStorageSync('userInfo',userInfo);
    wx.redirectTo({
      url: `../mendix/mendix`,
    })
  },
  handleNavToAppGallery(){
    wx.navigateTo({
      url: '../mendixAppGallery/mendixAppGallery',
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
