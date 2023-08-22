import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../Redux/App/hooks'
import { authSelector } from '../Redux/Features/Auth/authSlice'
import AppButton from './../Common/Form/AppButton'
import { useEffect, useState } from 'react'
import { logout, userInfo } from '../Redux/Features/Auth/authService'
import AppLoader from '../Common/AppLoader'

const Home = () => {
  const [loading, setLoading] = useState(true)
  const { user } = useAppSelector(authSelector)
  const dispatch = useAppDispatch()

  useEffect(() => {
    console.log(user)
    dispatch(userInfo()).then(() => {
      setLoading(false)
    })
  }, [])

  const logoutHandler = async () => {
    const result = await dispatch(logout())
    if (result.type.includes('fulfilled')) {
      // TODO: use navigate no correctly render auth page
      window.location.pathname = '/auth'
    }
  }

  if (loading) {
    return <AppLoader />
  }

  return (
    <div className='relative flex h-screen w-full bg-gray-50 dark:bg-gray-900'>
      <div className='flex h-full w-full items-center justify-center px-10'>
        <div className='flex w-full flex-col gap-3'>
          <h1 className='text-4xl font-bold dark:text-gray-200'>
            Don't forget your works with us
          </h1>
          <p className='text-lg font-semibold dark:text-gray-400'>
            start using app , have a nice time in our website
          </p>
          <div className='flex w-full flex-col items-center justify-center gap-1'>
            {user ? (
              <>
                <Link
                  className='focus:shadow-outline-purple grid h-full w-full justify-items-center rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none active:bg-purple-600'
                  to='/tasks'
                >
                  Tasks
                </Link>
                <div className='w-full' onClick={logoutHandler}>
                  <AppButton text='Logout' loading={false} />
                </div>
              </>
            ) : (
              <Link
                className='focus:shadow-outline-purple grid h-full w-full justify-items-center rounded-lg border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 hover:bg-purple-700 focus:outline-none active:bg-purple-600'
                to='/auth'
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
