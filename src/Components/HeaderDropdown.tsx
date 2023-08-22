import { useState,useEffect } from 'react'
import { Menu } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './../Redux/App/hooks'
import { logout } from '../Redux/Features/Auth/authService'
import { authSelector } from '../Redux/Features/Auth/authSlice'
import { BASE_URL } from '../Services/Axios/config'
import { AiOutlineHome } from 'react-icons/ai'
import { BiTask } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { FiLogOut } from 'react-icons/fi'

const links = [
  { id: 1, title: 'home', to: '/', icon: <AiOutlineHome /> },
  { id: 2, title: 'tasks', to: '/tasks', icon: <BiTask /> },
  { id: 3, title: 'profile', to: '/profile', icon: <CgProfile /> }
]

const HeaderDropdown = () => {
  const [alternativeProfileImage, setAlternativeProfileImage] = useState('')
  const { user } = useAppSelector(authSelector)
  const dispatch = useAppDispatch()
  // const navigate = useNavigate()

  const logoutHandler = async () => {
    const result = await dispatch(logout())
    if (result.type.includes('fulfilled')) {
      // TODO: use navigate no correctly render auth page
      window.location.pathname = '/auth'
    }
  }

  useEffect(() => {
    setAlternativeProfileImage('/img/avatar.jpg')
  }, [user])
  

  return (
    <Menu as='li' className='relative'>
      <Menu.Button className='focus:shadow-outline-purple rounded-full align-middle focus:outline-none'>
        <img
          className='h-8 w-8 rounded-full object-cover'
          src={
            user?.profile_image_path
              ? BASE_URL + user?.profile_image_path
              : alternativeProfileImage
          }
          alt='profile image'
        />
      </Menu.Button>
      <Menu.Items
        as='ul'
        className='absolute right-0 mt-2 w-56 space-y-2 rounded-md border border-gray-100 bg-white p-2 text-gray-600 shadow-md dark:border-gray-700 dark:bg-gray-700 dark:text-gray-300'
      >
        {links.map(({ id, title, to, icon }) => (
          <Menu.Item as='li' key={id}>
            <Link
              to={to}
              className='flex w-full items-center gap-3 rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'
            >
              {icon}
              <span className='capitalize'>{title}</span>
            </Link>
          </Menu.Item>
        ))}

        {/* logout li */}
        <Menu.Item as='li'>
          <div
            onClick={logoutHandler}
            className='flex w-full cursor-pointer items-center gap-3 rounded-md px-2 py-1 text-sm font-semibold transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200'
          >
            <FiLogOut />
            <span className='capitalize'>log out</span>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default HeaderDropdown
