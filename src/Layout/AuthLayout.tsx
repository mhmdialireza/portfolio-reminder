import React, { PropsWithChildren } from 'react'

type Props = {}

const AuthLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='flex min-h-screen items-center bg-gray-50 p-6 dark:bg-gray-900 w-full h-fit'>
      <div className='mx-auto h-full max-w-4xl flex-1 overflow-hidden rounded-lg bg-white shadow-xl dark:bg-gray-800'>
        <div className='flex flex-col overflow-y-auto md:flex-row'>
          <div className='h-32 md:h-auto md:w-1/2'>
            <img
              aria-hidden='true'
              className='h-full w-full object-cover dark:hidden'
              src='/img/login-office.jpeg'
              alt='Office'
            />
            <img
              aria-hidden='true'
              className='hidden h-full w-full object-cover dark:block'
              src='/img/login-office-dark.jpeg'
              alt='Office'
            />
          </div>
          <div className='flex items-center justify-center p-6 sm:p-12 md:w-1/2'>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
