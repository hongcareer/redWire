Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#d23819",
    list: [
      {
        text: "首页"
      }, 
      {
        text: "分类"
      },
      {
        text: "会员+"
      },
      {
        text: "购物车"
      },
      {
        text: "我的"
      },
      ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})