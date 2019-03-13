Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#d23819",
    list: [
      {
        icon:"iconfont icon-shouye",
        text: "首页",
        pagePath:"/pages/home/home"
      }, 
      {
        icon: "iconfont icon-fenlei",
        text: "分类",
        pagePath: "/pages/sort/sort"
      },
      {
        icon: "iconfont icon-huiyuan",
        text: "会员+",
        pagePath: "/pages/vip/vip"
      },
      {
        icon: "iconfont icon-gouwuche",
        text: "购物车",
        pagePath: "/pages/cart/cart"
      },
      {
        icon: "iconfont icon-geren",
        text: "我的",
        pagePath: "/pages/user/user"
      },
      ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset;
      console.log(data)
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})