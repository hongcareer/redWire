// pages/home/home.js
Page({
  data: {
    isShowMore:false,
  },
  onLoad: function (options) {
    wx.request({
      url: 'test.php', // 仅为示例，并非真实的接口地址
      data: {
        x: '',//参数
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      }
    })
  },
  changeShowStatus() {
    this.setData({
      isShowMore: true,
    })
  },
  onReady: function () {

  },
  onShow: function () {

  },
  onHide: function () {

  },
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})