import { useState } from 'react'
import LoginForm from '../Components/LoginForm'
import RegisterFrom from '../Components/RegisterFrom'

export enum FormEnum {
  LOGIN = 'login',
  REGISTER = 'register'
}

const Auth = () => {
  const [form, setForm] = useState<FormEnum>(FormEnum.LOGIN)

  return (
    <>
      {form == FormEnum.LOGIN ? (
        <LoginForm setForm={setForm} />
      ) : (
        <RegisterFrom setForm={setForm} />
      )}
    </>
  )
}

export default Auth
