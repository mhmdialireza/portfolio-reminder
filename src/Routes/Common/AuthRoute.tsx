import { lazy, Suspense } from 'react'
import { Outlet, RouteObject } from 'react-router-dom'
import AppLoader from '../../Common/AppLoader'
import AuthLayout from '../../Layout/AuthLayout'
const Auth = lazy(() => import('../../Pages/Auth'))

const PublicRoutes = () => {
  return (
    <AuthLayout>
      <Suspense fallback={<AppLoader />}>
        <Outlet />
      </Suspense>
    </AuthLayout>
  )
}

const authRoute: RouteObject[] = [
  {
    path: '',
    element: <PublicRoutes />,
    children: [
      {
        path: 'auth',
        element: <Auth />
      }
    ]
  }
]

export default authRoute
