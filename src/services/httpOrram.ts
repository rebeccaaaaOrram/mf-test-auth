import axios from 'axios'
import { useAuth } from '../hooks/useAuth'

axios.interceptors.response.use(
 (response) => {
  if (response.headers['set-authorization']) {
   const tokenName = 'token'
   const tokenValue = response.headers['set-authorization']
   localStorage.setItem(tokenName, tokenValue)
  }
  //   console.log("teste antes");
  return response
 },
 (error) => {
  if (error.response.status === 401) {
   window.location.href = window.location.origin
  } else return error.response
 }
)

axios.interceptors.request.use((request: any) => {
 if (!request.headers['Content-Type']) {
  request.headers['Content-Type'] = 'application/json'
 }
 if (!request.headers.Accept) {
  request.headers.Accept = 'application/json'
 }
 if (localStorage.getItem('u')) {
  const u = localStorage.getItem('u')
  let token = JSON.parse(u)
  request.headers.Authorization = 'Bearer ' + token.token
 }
 request.headers.TenantId = import.meta.env.VITE_TENANT_ID
 return request
})

export default {
 async get(url: string, headers: any) {
  try {
   const prodUrl = import.meta.env.VITE_GATEWAY_URL

   const response = await axios.get(prodUrl + url, headers)
   return response
  } catch (e) {
   return e
  }
 },
 async post(url: any, data: any, headers?: any) {
  try {
   const prodUrl = import.meta.env.VITE_GATEWAY_URL
   console.log('----->' + import.meta.env.VITE_GATEWAY_URL)
   console.log('----->' + import.meta.env.VITE_TENANT_ID)

   const response = await axios.post(prodUrl + url, data, headers)

   return response
  } catch (e) {
   return e
  }
 },
 async put(url: any, data: any, headers: any) {
  try {
   const prodUrl = import.meta.env.VITE_GATEWAY_URL
   const response = await axios.put(prodUrl + url, data, headers)
   return response
  } catch (e) {
   return e
  }
 },
 async delete(url: any, data: any) {
  try {
   const prodUrl = import.meta.env.VITE_GATEWAY_URL
   const response = await axios.delete(prodUrl + url, data)
   return response
  } catch (e) {
   return e
  }
 }
}
