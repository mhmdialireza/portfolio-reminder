import { PropsWithChildren } from 'react'
import Header from '../Components/Header'
import FloatNew from '../Components/FloatNew'

const MasterLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className='relative flex h-screen bg-gray-50 dark:bg-gray-900'>
      {children}
    </div>
  )
}

export default MasterLayout
