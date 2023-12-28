import httpOrram from '../../services/httpOrram'
import { IUser } from './types'

export function setUserLocalStorage(user: IUser | null) {
 localStorage.setItem('u', JSON.stringify(user))
}

export function getUserLocalStorage() {
 const json = localStorage.getItem('u')
 if (!json) {
  return null
 }

 const user = JSON.parse(json)
 return user ?? null
}
export async function LoginRequest(user: string, password: string) {
 try {
  const request: any = await httpOrram.post('/api/authentication/login', {
   userName: user,
   password
  })

  return request.data
 } catch (error) {
  return null
 }
}

export async function RefreshLoginRequest(refreshToken: string) {
 try {
  const request: any = await httpOrram.post(
   '/api/authentication/login/refreshToken',
   { refreshToken }
  )

  return request.data
 } catch (error) {
  return null
 }
}
