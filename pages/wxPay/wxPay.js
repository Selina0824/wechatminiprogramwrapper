// pages/wxPay/wxPay.js
Page({

  /**
   * Page initial data
   */
  data: {

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    wx.showToast({
      title: '支付成功',
    })
    const {timeStamp, nonceStr, prepayId, paySign} = JSON.parse(decodeURIComponent(options.payDataStr))
    console.log(timeStamp,nonceStr,prepayId,paySign)
    wx.requestPayment
    (
      {
        "timeStamp": timeStamp,
        "nonceStr": nonceStr,
        "package": `prepay_id=${prepayId}`,
        "signType": "RSA",
        "paySign": paySign,
        "success":function(res){
          wx.showToast({
            title: 'success',
          })
        },
        "fail":function(res){
          wx.showToast({
            title: 'fail',
          })
        },
        "complete":function(res){
        }
      }
    )
    
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})