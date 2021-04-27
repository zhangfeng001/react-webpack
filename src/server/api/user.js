import http from '../axios';
import { getToken, setToken, removeToken } from '../../utils/auth'

function login(parmas){
  return new Promise((resolve, reject) => {
    http("post",'/admin/doctorLogin',{
      phone:parmas.username,
      password: parmas.password
    }).then(res => {
      if (res.success) {
        setToken('123')
      }
      resolve(res)
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
  login
}
