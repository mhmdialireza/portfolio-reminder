import SelectBox, {
  SelectBoxItemType,
  SelectBoxItemsType
} from '../Components/SelectBox'
import Task from '../Components/Task'
import { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/App/hooks'
import { taskSelector } from '../Redux/Features/Task/taskSlice'
import { useEffect } from 'react'
import { filter as filterService } from './../Redux/Features/Task/taskService'
import { Order } from '../Enums/api.enum'
import AppLoader from '../Common/AppLoader'

const orderItems: SelectBoxItemsType = [
  { id: 1, title: 'latest', unavailable: false },
  { id: 2, title: 'oldest', unavailable: false },
  { id: 3, title: 'high priority', unavailable: false },
  { id: 4, title: 'low priority', unavailable: false }
]

const filterItems: SelectBoxItemsType = [
  { id: 1, title: 'all', unavailable: false },
  { id: 2, title: 'done', unavailable: false },
  { id: 3, title: 'ongoing', unavailable: false }
]

// const pageSize = 7

const Tasks = () => {
  const { tasks, status } = useAppSelector(taskSelector)
  const dispatch = useAppDispatch()
  // const [itemOffset, setItemOffset] = useState(0)
  // const endOffset = itemOffset + pageSize
  // const currentTasks = tasks.slice(itemOffset, endOffset)
  // const pageCount = Math.ceil(tasks.length / pageSize)

  // const handlePageClick = (event: any) => {
  //   const newOffset = (event.selected * pageSize) % tasks.length
  //   setItemOffset(newOffset)
  // }

  const [sort, setSort] = useState<SelectBoxItemType>(orderItems[0])
  const [filter, setFilter] = useState<SelectBoxItemType>(filterItems[0])

  useEffect(() => {
    const status: string = filter.title

    const column: 'created_at' | 'priority' = ['latest', 'oldest'].includes(
      sort.title
    )
      ? 'created_at'
      : 'priority'

    const order: Order = ['latest', 'high priority'].includes(sort.title)
      ? Order.dsc
      : Order.asc

    dispatch(filterService({ column, status, order }))
  }, [sort, filter])

  if (status == 'loading')
    return (
      <div className='w-full h-[90vh] grid justify-items-center'>
        <AppLoader />
      </div>
    )
  else
    return (
      <div className='container m-auto max-w-3xl'>
        <div className='my-6 flex w-full items-center justify-between font-semibold text-gray-700 dark:text-gray-200'>
          <h2 className='text-3xl'>Tasks</h2>
          <div className='flex gap-3'>
            <SelectBox
              title='Sort'
              items={orderItems}
              selectedItem={sort}
              setSelectedItem={setSort}
            />
            <SelectBox
              title='Filter'
              items={filterItems}
              selectedItem={filter}
              setSelectedItem={setFilter}
            />
          </div>
        </div>
        <div className='shadow-xs w-full overflow-hidden rounded-lg'>
          <div className='w-full overflow-x-auto'>
            <table className='whitespace-no-wrap w-full'>
              <thead>
                <tr className='flex border-b bg-gray-50 p-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400'>
                  <th className='flex flex-1 items-center justify-center'>
                    Status
                  </th>
                  <th className='flex flex-3 items-center justify-start md:flex-7 lg:flex-10'>
                    Title
                  </th>
                  <th className='flex flex-1 items-center justify-center'>
                    Priority
                  </th>
                  <th className='flex flex-1 items-center justify-center'>
                    Open
                  </th>
                </tr>
              </thead>
              <tbody className='divide-y bg-white dark:divide-gray-700 dark:bg-gray-800'>
                {tasks.map(task => (
                  <Task key={task.id} task={task} />
                ))}
              </tbody>
            </table>
          </div>
          <div className='flex items-center justify-center border-t bg-gray-50 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 sm:grid-cols-9'>
            {/* <span className="flex items-center col-span-3">
            Showing 21-30 of 100
          </span> 
           <span className="col-span-2"></span> */}
            {/* <span className='col-span-4 mt-2 flex sm:mt-auto sm:justify-end'>
            <nav aria-label='Table navigation'>
              <ul className='inline-flex items-center'>
                <li>
                  <button
                    className='focus:shadow-outline-purple rounded-md rounded-l-lg px-3 py-1 focus:outline-none'
                    aria-label='Previous'
                  >
                    <svg
                      aria-hidden='true'
                      className='h-4 w-4 fill-current'
                      viewBox='0 0 20 20'
                    >
                      <path
                        d='M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z'
                        clipRule='evenodd'
                        fillRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                    1
                  </button>
                </li>
                <li>
                  <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                    2
                  </button>
                </li>
                <li>
                  <button className='focus:shadow-outline-purple rounded-md border border-r-0 border-purple-600 bg-purple-600 px-3 py-1 text-white transition-colors duration-150 focus:outline-none'>
                    3
                  </button>
                </li>
                <li>
                  <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                    4
                  </button>
                </li>
                <li>
                  <span className='px-3 py-1'>...</span>
                </li>
                <li>
                  <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                    8
                  </button>
                </li>
                <li>
                  <button className='focus:shadow-outline-purple rounded-md px-3 py-1 focus:outline-none'>
                    9
                  </button>
                </li>
                <li>
                  <button
                    className='focus:shadow-outline-purple rounded-md rounded-r-lg px-3 py-1 focus:outline-none'
                    aria-label='Next'
                  >
                    <svg
                      className='h-4 w-4 fill-current'
                      aria-hidden='true'
                      viewBox='0 0 20 20'
                    >
                      <path
                        d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                        clipRule='evenodd'
                        fillRule='evenodd'
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span> */}
            {/* <ReactPaginate
            breakLabel='...'
            nextLabel='next >'
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel='< previous'
            renderOnZeroPageCount={null}
          /> */}
          </div>
        </div>
      </div>
    )
}

export default Tasks
