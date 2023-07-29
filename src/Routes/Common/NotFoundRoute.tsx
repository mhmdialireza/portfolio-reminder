import { Navigate, Outlet, RouteObject } from 'react-router-dom'
import ProtectedLayout from '../../Layout/ProtectedLayout'
import NotFound from '../../Pages/NotFound'

const NotFoundRoute = () => {
  return (
    <ProtectedLayout>
      <Outlet />
    </ProtectedLayout>
  )
}

const notFoundRoute: RouteObject = {
  path: '/',
  element: <NotFoundRoute />,
  children: [
    {
      path: '*',
      element: <NotFound />
    }
  ]
}

export default notFoundRoute
