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
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src="/img/register-office.jpeg"
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src="/img/register-office-dark.jpeg"
              alt="Office"
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            {form == FormEnum.LOGIN ? (
              <LoginForm setForm={setForm} />
            ) : (
              <RegisterFrom setForm={setForm} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth
