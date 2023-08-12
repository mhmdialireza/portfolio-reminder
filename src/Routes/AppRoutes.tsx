import { RouteObject, useRoutes } from 'react-router-dom'
import { authSelector } from '../Redux/Features/Auth/authSlice'
import { useAppSelector } from '../Redux/App/hooks'
import notFoundRoute from './Common/NotFoundRoute'
import authRoute from './Common/AuthRoute'
import protectedRoutes from './ProtectedRoutes'

function AppRoutes() {
  let routes: RouteObject[] = []

  const { token } = useAppSelector(authSelector)

  if (token) {
    routes = [...protectedRoutes]
  } else {
    routes = [...authRoute]
  }

  routes.push(notFoundRoute)

  // console.log(routes);

  const element = useRoutes(routes)
  return <div>{element}</div>
}

export default AppRoutes
