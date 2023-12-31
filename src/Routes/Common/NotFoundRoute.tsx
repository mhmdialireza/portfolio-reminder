import { Outlet, RouteObject } from 'react-router-dom'
import ProtectedLayout from '../../Layout/ProtectedLayout'
import NotFound from '../../Pages/NotFound'
import MasterLayout from '../../Layout/AppLayout'

const NotFoundRoute = () => {
  return (
    <MasterLayout>
      <Outlet />
    </MasterLayout>
    // <ProtectedLayout>
    //   <Outlet />
    // </ProtectedLayout>
  )
}

const notFoundRoute: RouteObject = {
  path: '',
  // element: <NotFoundRoute />,
  children: [
    {
      path: '*',
      element: <NotFound />
    }
  ]
}

export default notFoundRoute
