import axios from './$axios'
import base from './base'

/*
* 用户信息api
*/
const baseUrl = `${base.url}`
// 获取用户名信息
export const getInfo = (inputText) => {
  return axios.get(`${baseUrl}/getPythonResult?inputText=${inputText}`)
}
