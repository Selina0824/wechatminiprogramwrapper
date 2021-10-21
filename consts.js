export const MENDIX_APP = {
  baseURL: 'http://localhost:8080/',
  // baseURL: 'https://cdn.mendix-dev.kyleliu.top/',
  webviewURL() {
    return this.baseURL + 'link/wechat'
  },
  apiBaseURL() {
    return this.baseURL + 'rest/wxservices/v1/'
  },
  getOpenID(code) {
    return `${this.apiBaseURL()}openidresp?code=${code}`
  },
}
