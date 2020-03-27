import axios from './config'

let getData = {}
let url = 'http://yd.msword.top'
let api = 'http://localhost:3000'

// 首页
getData.getList = () => {
    return axios.get(url + '/getIndexData')
}
// 商品详情
getData.getDetail =(data) =>{
    return axios.get(url + '/getDetails',{
        params : {
            pid : data
        }
    })
}
// 分类
getData.getClassify = () => {
    return axios.get(url + '/getClassify')
}
// 登录
getData.getLogin = (data) => {
    return axios.get(api + '/login/cellphone',{
        params : data
    })
}

// 注册
getData.cellPhone = (data) => {
    return axios.get(api + '/register/cellphone',{
        params : data
    })
}
// 验证码
getData.captcha = (data) =>{
    return axios.get(api + '/captcha/sent',{
        params : {
            phone:data
        }
    })
}

export default getData