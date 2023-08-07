import { RouteObject } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ProtectedLayout from '../Layout/ProtectedLayout'
import Tasks from '../Pages/Tasks'
import AddTask from '../Pages/AddTask'
import Profile from '../Pages/Profile'
import Home from '../Pages/Home'

const ProtectedRoutes = () => {
  return (
    <ProtectedLayout>
      <Outlet />
    </ProtectedLayout>
  )
}

const protectedRoutes: RouteObject[] = [
  {
    path: '',
    element: <ProtectedRoutes />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'tasks',
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
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Profile />
          }
        ]
      }
    ]
  }
]
export default protectedRoutes
