import NewLogin from './components/NewLogin'

export default function App() {
  return (
    <NewLogin logoSrc="" onLogin={(username: string, password: string) => { console.log('Entrar') }}/>
  )
}
