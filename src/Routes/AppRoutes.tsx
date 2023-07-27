import { RouteObject, useRoutes } from 'react-router-dom'
import publicRoutes from './Public/PublicRoutes'
import MasterLayout from '../Layout/MasterLayout'
import userRoutes from './Protected/User/UserRoutes'
import { authSelector } from '../Redux/Features/Auth/authSlice'
import { useAppDispatch, useAppSelector } from '../Redux/App/hooks'
import { useEffect } from 'react'
import { userInfo } from '../Redux/Features/Auth/authService'
import storage from '../Utils/storage'

function AppRoutes() {
  let routes: RouteObject[] = []


//  ???????????????

  routes.push(...publicRoutes)

  const element = useRoutes(routes)

  return <MasterLayout>{element}</MasterLayout>
}

export default AppRoutes
