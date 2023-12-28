import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthProvider/index'

export const useAuth = () => {
 const context = useContext(AuthContext)

 return context
}
