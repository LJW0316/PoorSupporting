//index.js
const app = getApp()

Page({
  data: {
    account:'',
    password:''
  },

  formSubmit:function (e){
    var account=e.detail.value.account;
    var password=e.detail.value.password;
    if (account.length>0 && password.length>0){
      accountCheck = true;
    }
    if (accountCheck == true){
      wx.switchTab({
        url: '/pages/index/index',
      })
    } else{
      wx.showToast({
        title: '学号或密码不得为空！',
        icon:'none'
      })
      this.setData({
        password:'',
        account:''
      })
    }
  },
  forget:function(){
    wx.navigateTo({
      url: '/pages/forget/forget',
    })
  },
  signUp:function(){
    wx.navigateTo({
      url: '/pages/signUp/signUp',
    })
  }
})
