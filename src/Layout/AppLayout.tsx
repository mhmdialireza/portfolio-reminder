import { PropsWithChildren } from 'react'
import Header from '../Components/Header'
import FloatNew from '../Components/FloatNew'

const AppLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className='flex w-full flex-1 flex-col'>
        <Header />
        <main className='h-full overflow-y-auto'>
          <div className='container mx-auto grid px-6'>{children}</div>
        </main>
      </div>
      <FloatNew />
    </>
  )
}

export default AppLayout
