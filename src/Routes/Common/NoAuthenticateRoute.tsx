import { Suspense } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'
import AppLoader from '../../Common/AppLoader'

const NoAuthenticateRoute = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Outlet />
    </Suspense>
  )
}

const noAuthenticateRoute: RouteObject = {
  path: '*',
  element: <NoAuthenticateRoute />,
  children: [
    {
      path: '',
      element: <Navigate to="/auth" />
    }
  ]
}

export default noAuthenticateRoute
