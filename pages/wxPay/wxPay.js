// pages/wxPay/wxPay.js
import {MENDIX_APP} from '../../consts'
Page({

  /**
   * Page initial data
   */
  data: {
    showModal: false,
    out_trade_no:'',
    url: ''
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    const _this = this;
    const {timeStamp, nonceStr, prepayId, paySign, out_trade_no, msgTemplateId} = JSON.parse(decodeURIComponent(options.payDataStr));
    wx.requestPayment({
        "timeStamp": timeStamp,
        "nonceStr": nonceStr,
        "package": `prepay_id=${prepayId}`,
        "signType": "RSA",
        "paySign": paySign,
        "success":function(res){
          if (res.errMsg === "requestPayment:ok") {
            wx.requestSubscribeMessage({
              tmplIds: [msgTemplateId],
              success(res) {
                console.log('Requested subscribe message successfully')
              },
              fail(res) {
                console.log('Failed to request subscribe message')
                console.log(res)
              }
            })
            _this.setData({
              showModal: true,
              out_trade_no
            })
          }
        },
        "fail":function(res){
          wx.showToast({
            title: '支付失败',
            icon: 'error'
          })
        },
        "complete":function(res){
        }
    })
  },
  okConfirm() {
    this.hideModal();
    this.setData({
      url: `${MENDIX_APP.backToWebview(this.data.out_trade_no)}`
    })
  },
  hideModal() {
    this.setData({
      showModal: false
    });
  }
})