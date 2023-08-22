import { Outlet, RouteObject } from 'react-router-dom'
import ProtectedLayout from '../../Layout/ProtectedLayout'
import NotFound from '../../Pages/NotFound'
import MasterLayout from '../../Layout/AppLayout'
import Home from '../../Pages/Home'

const HomeRoute = () => {
  return (
    <ProtectedLayout>
      <Outlet />
    </ProtectedLayout>
  )
}

const homeRoute: RouteObject = {
  path: '',
  // element: <HomeRoute />,
  children: [
    {
      path: '/',
      element: <Home />
    }
  ]
}

export default homeRoute
