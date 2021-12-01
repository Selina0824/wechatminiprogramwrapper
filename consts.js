export const MENDIX_APP = {
  // baseURL: 'http://localhost:8080/',
  baseURL: 'https://cdn.mendix-dev.kyleliu.top/',
  baseURL_MendixAppGallery: 'https://mxappfinder.cevent.com.cn',
  webviewURL() {
    return this.baseURL + 'link/wechat'
  },
  apiBaseURL() {
    return this.baseURL + 'rest/wxservices/v1/'
  },
  getOpenID(code) {
    return `${this.apiBaseURL()}openidresp?code=${code}`
  },
  backToWebview(out_trade_no) {
    return `${this.baseURL}link/orderInfo?out_trade_no=${out_trade_no}`
  },
}
