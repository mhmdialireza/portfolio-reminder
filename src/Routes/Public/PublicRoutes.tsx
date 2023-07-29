import { lazy, Suspense } from 'react'
import {  Outlet, RouteObject } from 'react-router-dom'
import AppLoader from '../../Common/AppLoader'
const Auth = lazy(() => import('../../Pages/Auth'))

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
        path: '',
        element: <Auth />
      },
    ]
  },
]

export default publicRoutes
