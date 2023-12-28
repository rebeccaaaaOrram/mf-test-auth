import Login from './components/Login'

export default function App() {
  return (
    <Login logoSrc="" onLogin={(username: string, password: string) => { console.log('Entrar') }}/>
  )
}
