import { Navigate, RouteObject } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Tasks from '../../../Pages/Tasks';
import MasterLayout from '../../../Layout/MasterLayout';

const UserRoutes = () => {
  return (
    <MasterLayout>
      <Outlet />
    </MasterLayout>
  );
};

const userRoutes: RouteObject[] = [
  {
    path: '/',
    element: <UserRoutes />,
    children: [
      {
        path: 'tasks',
        element: <Tasks />,
      },
      // {
      //   path: 'task/:id',
      //   element: <Task />,
      // },
      {
        path: '*',
        element: <Navigate to='tasks' />,
      },
    ],
  },
];
export default userRoutes;
