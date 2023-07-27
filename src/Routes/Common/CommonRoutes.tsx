import { Navigate, RouteObject } from 'react-router-dom';

const commonRoutes: RouteObject[] = [
  {
    path: '*',
    element: <Navigate to='/tasks' />,
  },
];

export default commonRoutes;
