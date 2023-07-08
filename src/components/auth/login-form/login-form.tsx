import { useController, useForm } from 'react-hook-form'

import { Button } from '../../ui/button'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/text-field'

type FormValues = {
  login: string
  password: string
  rememberMe: boolean
}
export const LoginForm = () => {
  const { control, register, handleSubmit } = useForm<FormValues>()
  const onSubmit = (data: FormValues) => {
    console.log(data)
  }
  const {
    field: { value, onChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField {...register('login')} label={'login'} />
      <TextField {...register('password')} label={'password'} />
      <Checkbox onChange={onChange} checked={value} label={'Remember me'} />
      <Button type="submit" fullWidth variant="tertiary">
        Submit
      </Button>
    </form>
  )
}
