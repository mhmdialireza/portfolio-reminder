import { PropsWithChildren, useEffect } from 'react'
import Header from '../Components/Header'
import AddTask from '../Components/AddTask'

const MasterLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 relative pb-10">
        <div className="flex flex-col flex-1 w-full">
          <Header />
          <main className="h-full overflow-y-auto">
            <div className="container px-6 mx-auto grid">{children}</div>
          </main>
        </div>
      </div>
      <AddTask />
    </>
  )
}

export default MasterLayout
