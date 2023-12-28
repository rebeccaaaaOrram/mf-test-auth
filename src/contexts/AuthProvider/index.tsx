import React, { createContext, useEffect, useState } from 'react'
import { IAuthProvider, IContext, IUser } from './types'
import {
  getUserLocalStorage,
  LoginRequest,
  RefreshLoginRequest,
  setUserLocalStorage
} from './util'
import jwt_decode from 'jwt-decode'
import { useHistory } from 'react-router'
import httpOrram from '../../services/httpOrram'

export const AuthContext = createContext<IContext>({} as IContext)

export const AuthProvider = ({ children }: IAuthProvider) => {
  const history = useHistory()
  const [user, setUser] = useState<IUser | null>(getUserLocalStorage())

  useEffect(() => {
    const intervalId = setInterval(async () => {
      if (!user) {
        return
      }
      const response = await RefreshLoginRequest(user.refreshToken)
      const { name, ResetPassword }: any = jwt_decode(
        response.data.access_token
      )
      const payload = {
        token: response.data?.access_token,
        refreshToken: response.data?.refresh_token,
        user: 'FooBar',
        jwtName: name,
        resetPassword: ResetPassword
      }
      setUser(payload)
      setUserLocalStorage(payload)
    }, 1000 * 60 * 5)

    return () => clearInterval(intervalId)
  }, [user])

  async function authenticate(user: string, password: string) {
    const response = await LoginRequest(user, password)
    const { name, ResetPassword, email, AllUsers, Contatos }: any = response.data
      ? jwt_decode(response.data.access_token)
      : {}
    const payload = {
      token: response.data?.access_token,
      refreshToken: response.data?.refresh_token,
      user: 'FooBar',
      jwtName: name,
      resetPassword: ResetPassword,
      email,
      AllUsers,
      Contatos
    }
    setUser(payload)
    setUserLocalStorage(payload)
    console.log(payload)
  }

  function logout() {
    setUser(null)
    localStorage.removeItem('u')
    window.location.replace('/')
    // aqui vai ter um endpoint para revogar o token depois do logout
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
