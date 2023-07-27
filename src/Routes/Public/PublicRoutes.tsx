import { lazy, Suspense } from 'react'
import { Navigate, Outlet, RouteObject } from 'react-router-dom'
import AppLoader from '../../Common/AppLoader'
const Register = lazy(() => import('./../../Pages/Register'))
const Login = lazy(() => import('./../../Pages/Login'))

const PublicRoutes = () => {
  return (
    <Suspense fallback={<AppLoader />}>
      <Outlet />
    </Suspense>
  )
}

// ===> current path  /app
const publicRoutes: RouteObject[] = [
  {
    path: '/auth',
    element: <PublicRoutes />,
    children: [
      {
        path: 'register',
        element: <Register />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: '*',
        element: <Navigate to="login" />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/auth/login" />
  }
]

export default publicRoutes
