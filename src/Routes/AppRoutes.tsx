import { RouteObject, useRoutes } from 'react-router-dom'
import { authSelector } from '../Redux/Features/Auth/authSlice'
import { useAppSelector } from '../Redux/App/hooks'
import notFoundRoute from './Common/NotFoundRoute'
import authRoute from './Common/AuthRoute'
import protectedRoutes from './ProtectedRoutes'
import homeRoute from './Common/HomeRoute'
import MasterLayout from '../Layout/MasterLayout'

function AppRoutes() {
  let routes: RouteObject[] = []

  const { token } = useAppSelector(authSelector)

  routes.push(homeRoute)

  if (token) {
    routes = [...routes,...protectedRoutes]
  } else {
    routes = [...routes,...authRoute]
  }

  // should be the last one
  routes.push(notFoundRoute)

  const element = useRoutes(routes)
  return <MasterLayout>{element}</MasterLayout>
}

export default AppRoutes
