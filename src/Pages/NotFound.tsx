import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='flex h-full w-full flex-col items-center justify-center gap-2'>
      <h1 className='text-4xl font-bold dark:text-gray-200'>
        Page not found 404
      </h1>
      <p className='flex gap-1 text-lg font-semibold dark:text-gray-400'>
        go to
        <Link className='text-purple-600' to='/'>
          Home page
        </Link>
      </p>
    </div>
  )
}

export default NotFound
