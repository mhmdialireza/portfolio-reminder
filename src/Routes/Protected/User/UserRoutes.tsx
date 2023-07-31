import { RouteObject } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ProtectedLayout from '../../../Layout/ProtectedLayout'
import Tasks from '../../../Pages/Tasks'
import AddTask from '../../../Pages/AddTask'

const UserRoutes = () => {
  return (
    <ProtectedLayout>
      <Outlet />
    </ProtectedLayout>
  )
}

const userRoutes: RouteObject[] = [
  {
    path: '/tasks',
    element: <UserRoutes />,
    children: [
      {
        path: '',
        element: <Tasks />
      },
      {
        path: 'add',
        element: <AddTask />
      }
    ]
  }
]
export default userRoutes
