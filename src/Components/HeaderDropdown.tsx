import { Menu } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from './../Redux/App/hooks'
import { logout } from '../Redux/Features/Auth/authService'
import { authSelector } from '../Redux/Features/Auth/authSlice'
import { BASE_URL } from '../Services/Axios/config'

type Props = {}

const HeaderDropdown = ({}: Props) => {
  const { user } = useAppSelector(authSelector)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const logoutHandler = async () => {
    const result = await dispatch(logout())
    if (result.type.includes('fulfilled')) {
      // TODO: use navigate no correctly render auth page
      window.location.pathname = '/auth'
    }
  }

  return (
    <Menu as="li" className="relative">
      <Menu.Button className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none">
        <img
          className="object-cover w-8 h-8 rounded-full"
          // src="/img/avatar.jpg"
          src={user?.profile_image_path ? BASE_URL+user?.profile_image_path : '/img/avatar.jpg'}
          alt="profile image"
        />
      </Menu.Button>
      <Menu.Items
        as="ul"
        className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700"
      >
        <Menu.Item as="li">
          <Link
            to="/profile"
            className="inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <svg
              className="w-4 h-4 mr-3"
              aria-hidden="true"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <span>Profile</span>
          </Link>
        </Menu.Item>
        <Menu.Item as="li">
          <div
            onClick={logoutHandler}
            className="cursor-pointer inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            <svg
              className="w-4 h-4 mr-3"
              aria-hidden="true"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
            </svg>
            <span>Log out</span>
          </div>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

export default HeaderDropdown
