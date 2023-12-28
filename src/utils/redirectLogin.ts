import { useHistory } from 'react-router'
export const redirectToLogin = () => {
  const history = useHistory()
  setTimeout(() => {
    history.push('/') // Redirect to login page
  }, 3000)
}
