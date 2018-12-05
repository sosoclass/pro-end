/*
 作用：用来定义发送ajax模块工具函数
 */
import axios from 'axios';

export default async function (url, data, method = 'GET') {
  let qs = '';
  if (data) {

    const arr = Object.keys(data);

    arr.forEach(key => {
      qs += `${key}=${data[key]}&`;
    })

    qs = qs.substring(0, qs.length - 1);
  }
  const type = method.toUpperCase();
  if (type === 'GET') {
    return axios.get(url + '?' + qs);
  } else if (type === 'POST') {
    return axios.post(url, qs, {
      'content-type': 'application/x-www-form-urlencoded'
    });
  }

}