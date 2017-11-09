Page({
  data: {
    btn:"",
    testData:''
  },
  onLoad() {
    this.setData({
      btn:"点击我"      
    })
  },
  bindMove(){
    this.setData({
      testData:"我是动态添加的数据！" ,
      btn:"已经点过了"        
    })
  },
  go(){
    my.navigateTo({
      url: '../index/index',
    });
  }
});
