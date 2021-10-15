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
  onLoad(param) {
    const {name, avatar} = param
    this.setData({
      url: `${MENDIX_APP.webviewURL()}?username=${name}&avatar=${avatar}`
    })
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
