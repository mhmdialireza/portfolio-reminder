import { RouteObject } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ProtectedLayout from '../../../Layout/ProtectedLayout'
import Tasks from '../../../Pages/Tasks'

const UserRoutes = () => {
  return (
    <ProtectedLayout>
      <Outlet />
    </ProtectedLayout>
  )
}

const userRoutes: RouteObject[] = [
  {
    path: '/',
    element: <UserRoutes />,
    children: [
      {
        path: 'tasks',
        element: <Tasks />
      }
    ]
  }
]
export default userRoutes
