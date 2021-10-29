// mendix.js
// 获取应用实例
import {MENDIX_APP} from '../../consts'
const app = getApp()
Page({
  data: {
    url: '',
    shareData: {
      url: '',
      title: 'mini program share',
      message: 'I found an interesting webpage'
    }
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  onLoad() {
    const userInfo = wx.getStorageSync('userInfo');
    const code = wx.getStorageSync('code');
    if (userInfo) {
      const {nickName, avatarUrl} = userInfo; 
      console.log(nickName,avatarUrl)
      this.setData({
        url: `${MENDIX_APP.webviewURL()}?username=${nickName}&avatar=${avatarUrl}&code=${code}`
      });
    } else {
      wx.redirectTo({
        url: '/pages/index/index',
      })
    }
  },
  messageHandler(e){
    console.log(e)
    const {data} = e.detail
    const lastMsg = data[data.length - 1]
    const {url, title, message} = lastMsg
    this.setData({
      shareData:{
        url, 
        title, 
        message
      }
    })
    this.handleShare()
  },

  handleShare(){
    wx.navigateTo({
      url: `/pages/share/share?url=${encodeURIComponent(MENDIX_APP.baseURL + '/link/share?page=sample')}`,
    })
  },

  onShareAppMessage (opt) {
    const {shareData} = this.data
    if(!shareData.url){
      shareData.url = opt.webViewUrl
    }
    this.setData({
      shareData
    })
    this.handleShare()
  },

  webViewLoadHander(e){
    console.log(e)
  },

  webViewErrorHander(e){
    console.error(e)
  }
})
