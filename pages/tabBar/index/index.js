Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
    images: [
      'http://upload.71.cn/2020/0310/1583825660958.png',
      'http://pic.people.com.cn/NMediaFile/2020/0326/MAIN202003261012000577296374152.jpg'
    ],
    location: '获取位置'
  },
  getlocal() {
    console.log(111)
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: res => {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        wx.chooseLocation({
          latitude,
          longitude,
          scale: 18,
          success: result => {
            this.setData({
              location: result.address
            })
          }
        })
      }
    })
  }
})