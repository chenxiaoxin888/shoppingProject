<template>
  <div class="box">
    <div class="carHeader">
      <p class="leftHeader"></p>
      <p class="conHeader">登录</p>
      <p class="rigthHeader" @click="toReg">注册</p>
    </div>
    <div class="loginCon">
      <div class="inp">
        <span class="inpPho">手机号:</span>
        <input class="text" type="text" v-model="userInfo.phone" />
      </div>
      <div class="inp">
        <span class="inpPho">密 &nbsp 码:</span>
        <input class="text" type="password" v-model="userInfo.password" />
      </div>
      <p class="forget">忘记密码</p>
      <van-button type="primary" block @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import api from "../../common/api";
export default {
  data() {
    return {
      userInfo: {
        phone: "",
        password: ""
      }
    };
  },
  methods: {
    toReg() {
      this.$router.push("/registration");
    },
    login() {
      if (this.userInfo.phone == "" || this.userInfo.password == "") {
        alert("请输入账号或密码");
      } else {
        api
          .getLogin(this.userInfo)
          .then(res => {
            console.log(res);
            if (res.data.code == 200) {
              sessionStorage.setItem("token", res.data.account.tokenVersion);
              this.$router.push("/home");
            }
          })
          .catch(err => {
            console.log(err);
          });
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
</style>