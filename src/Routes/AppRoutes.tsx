import { RouteObject, useRoutes } from 'react-router-dom'
import publicRoutes from './Public/PublicRoutes'
import MasterLayout from '../Layout/MasterLayout'
import userRoutes from './Protected/User/UserRoutes'
import { authSelector } from '../Redux/Features/Auth/authSlice'
import { useAppSelector } from '../Redux/App/hooks'
import notFoundRoute from './Common/NotFoundRoute'
import noAuthenticateRoute from './Common/NoAuthenticateRoute'

function AppRoutes() {
  let routes: RouteObject[] = []

  const { token } = useAppSelector(authSelector)

  if (token) {
    routes = [...userRoutes, notFoundRoute]
  } else {
    routes = [...publicRoutes, noAuthenticateRoute]
  }

  const element = useRoutes(routes)
  return <MasterLayout>{element}</MasterLayout>
}

export default AppRoutes
