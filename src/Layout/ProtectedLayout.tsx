import { PropsWithChildren, useEffect } from 'react'
import AppLoader from '../Common/AppLoader'
import { userInfo } from '../Redux/Features/Auth/authService'
import { useAppDispatch, useAppSelector } from '../Redux/App/hooks'
import { authSelector } from '../Redux/Features/Auth/authSlice'

export default function ProtectedLayout({ children }: PropsWithChildren) {
  const { user } = useAppSelector(authSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(userInfo())
  }, [dispatch])

  return user ? (
    <div>{children}</div>
  ) : (
    <div className="h-screen w-full grid place-items-center">
      <AppLoader />
    </div>
  )
}
