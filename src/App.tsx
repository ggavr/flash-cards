import { LoginForm } from './components/auth/login-form/login-form.tsx'
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Header } from './components/ui/header/header.tsx'

export function App() {
  return (
    <div>
      <Header>
        <h2>Logo</h2>
        <Button variant={'primary'}>Sign in</Button>
      </Header>
      <section style={{ display: 'flex', justifyContent: 'center', marginTop: '120px' }}>
        <Card>
          <LoginForm />
        </Card>
      </section>
    </div>
  )
}
