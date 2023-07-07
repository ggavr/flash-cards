import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Header } from './components/ui/header/header.tsx'
import { Label } from './components/ui/label'
import { TextField } from './components/ui/text-field'

export function App() {
  return (
    <div>
      <Header>
        <h2>LOGO</h2>
        <Button variant={'secondary'}>Hi</Button>
      </Header>
      <section style={{ marginTop: '7em' }}>
        <Card style={{ margin: '0 auto' }}>
          <Button>Hi</Button>
          <Button variant={'tertiary'} fullWidth={true}>
            Hi
          </Button>
          <TextField search={true} />
          <TextField />
          <Label>ddd</Label>
        </Card>
      </section>
    </div>
  )
}
