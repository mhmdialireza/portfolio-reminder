import { PropsWithChildren, useEffect, useState } from 'react'
import AppLoader from '../Common/AppLoader'
import { userInfo } from '../Redux/Features/Auth/authService'
import { useAppDispatch, useAppSelector } from '../Redux/App/hooks'
import { authSelector } from '../Redux/Features/Auth/authSlice'

const ProtectedLayout = ({ children }: PropsWithChildren) => {
  const { user } = useAppSelector(authSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userInfo())
  }, [dispatch])

  return user ? (
    <>{children}</>
  ) : (
    <div className='grid h-screen w-full place-items-center'>
      <AppLoader />
    </div>
  )
}

export default ProtectedLayout
