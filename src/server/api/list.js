import http from '../axios';

/**
 * 某功能接口
 */
function getArticleList(parmas){
  return new Promise((resolve, reject) => {
    http("get",'/admin/articleCatalog/list').then(res => {
      resolve (res);
    },error => {
      console.log("网络异常~",error);
      reject(error)
    })
  }) 
}

export {
   getArticleList
}

