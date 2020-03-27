import http from 'axios'

let axios = http.create()

axios.interceptors.request.use(config => {
// Do something before request is sent
console.log(config)
return config;
},error => {
// Do something with request error
return Promise.reject(error);
});

axios.interceptors.response.use(response => {
// Do something before response is sent
console.log(response)
return response;
},error => {
// Do something with response error
return Promise.reject(error);
});

export default axios