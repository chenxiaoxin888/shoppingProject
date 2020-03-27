<template>
  <div class="box">
    <div class="carHeader">
      <p class="leftHeader"></p>
      <p class="conHeader">注册</p>
      <p class="rigthHeader" @click="toLogin">登录</p>
    </div>
    <div class="loginCon">
      <div class="inp">
        <span class="inpPho">账号:</span>
        <input class="text" type="text" v-model="userInfo.nickname" />
      </div>
      <div class="inp">
        <span class="inpPho">密 &nbsp 码:</span>
        <input class="text" type="password" v-model="userInfo.password" />
      </div>
      <div class="inp">
        <span class="inpPho">手机号:</span>
        <input class="text" type="text" v-model="userInfo.phone" />
      </div>
      <div class="inp">
        <span class="inpPho">验证码:</span>
        <input class="text" type="text" v-model="userInfo.captcha" />
        <p class="gain" v-show="verShow" @click="upData">点击获取</p>
        <p class="gain" v-show="!verShow">{{timer}}秒</p>
      </div>

      <van-button type="primary" block @click="reg">下一步</van-button>

      <div class="read">
        <van-checkbox v-model="checked" shape="square"></van-checkbox>
        <span>我已阅读并同意使用条款和隐私政策</span>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../../common/api'
export default {
  data() {
    return {
      checked: true,
      verShow: true,
      timer: 60,
      userInfo:{
          nickname:'',
          password:'',
          phone :'',
          captcha:''
      }
    };
  },
  methods: {
    toLogin() {
      this.$router.push("/login");
    },
    upData() {
      this.verShow = false;
      let time = setInterval(() => {
        this.timer--;
        if (this.timer == 0) {
          this.verShow = true;
          clearInterval(time);
        }
      }, 1000);
      if(this.userInfo.phone == ''){
          alert('请输入手机号')
      }else{
          api.captcha(this.userInfo.phone)
          .then(res => {
              console.log(res)
          })
          .catch( err => {
              console.log(err)
          })
      }
    },
    reg(){
        console.log(this.userInfo)
        if(this.userInfo.nickname == ''||this.userInfo.password == ''){
            alert('请输入账号或密码')
        }else if(this.userInfo.phone == ''||this.userInfo.captcha == ''){
            alert('请输入手机号或验证码')
        }else if(this.checked == false){
            alert('请勾选协议')
        }else{
            api.cellPhone(this.userInfo)
            .then(res => {
                console.log(res)
                if(res.data.code ==200){
                    sessionStorage.setItem('token' , res.data.account.tokenVersion)
                    this.$router.push('/home')
                }else{
                    alert('用户名已被使用')
                }
            })
            .catch( err => {
                console.log(err)
            })
        }
    }
  }
};
</script>


<style lang="stylus" scoped>
@import '../../stylus/index.styl';

.carHeader {
  width: 100%;
  height: 1.08rem; /* 108/100 */
  background: $money;
  text-align: center;
  line-height: 1.08rem; /* 108/100 */
  color: #fff;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;
  box-sizing: border-box;
}

.leftHeader {
  height: 1.08rem; /* 108/100 */
  width: 1.08rem; /* 108/100 */
}

.conHeader {
  flex: 1;
}

.rigthHeader {
  height: 1.08rem; /* 108/100 */
  width: 1.08rem; /* 108/100 */
  font-size: 18px;
}

.loginCon {
  width: 100%;
  height: 5rem; /* 500/100 */
  position: absolute;
  top: 25%;
  left: 0;
  box-sizing: border-box;
}

.loginCon {
  padding: 0.3rem /* 30/100 */ 0.6rem; /* 60/100 */
}

.inp {
  position: relative;
}

.inpPho {
  position: absolute;
  top: 0.48rem; /* 48/100 */
  left: 0;
  color: #666666;
}

.text {
  height: 0.8rem; /* 80/100 */
  width: 100%;
  background: none;
  outline: none;
  border: 0px;
  border-bottom: 1px solid red;
  padding-left: 1.2rem; /* 120/100 */
  box-sizing: border-box;
  margin-top: 0.3rem; /* 30/100 */
}

.forget {
  text-align: right;
  margin-top: 0.2rem; /* 20/100 */
  font-size: 0.28rem; /* 28/100 */
  color: #666666;
}

.van-button {
  margin-top: 0.3rem; /* 30/100 */
  border-radius: 5px;
  background: $money;
  border: none;
}

.gain {
  position: absolute;
  top: 0.48rem; /* 48/100 */
  right: 0;
  padding-right: 0.3rem; /* 30/100 */
  color: $money;
  font-size: 0.3rem; /* 30/100 */
}

.read {
  margin-top: 0.6rem; /* 60/100 */
  position: relative;
  padding-left: 0.5rem; /* 50/100 */
}

.van-checkbox {
  position: absolute;
  left: 0;
  top: -3px;
}
</style>