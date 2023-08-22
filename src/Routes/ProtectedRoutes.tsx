import { RouteObject } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import ProtectedLayout from '../Layout/ProtectedLayout'
import Tasks from '../Pages/Tasks'
import AddTask from '../Pages/AddTask'
import Profile from '../Pages/Profile'
import Home from '../Pages/Home'
import Task from '../Pages/Task'
import AppLayout from '../Layout/AppLayout'

const ProtectedRoutes = () => {
  return (
    <AppLayout>
      <ProtectedLayout>
        <Outlet />
      </ProtectedLayout>
    </AppLayout>
  )
}

const protectedRoutes: RouteObject[] = [
  {
    path: '',
    element: <ProtectedRoutes />,
    children: [
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
          },
          {
            path: ':id',
            element: <Task />
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
