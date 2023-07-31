import SelectBox, {
  SelectBoxItemType,
  SelectBoxItemsType
} from '../Components/SelectBox'
import Task from '../Components/Task'
import { useState } from 'react'

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

type Props = {}

const Tasks = ({}: Props) => {
  const [sort, setSort] = useState<SelectBoxItemType>(orderItems[0])
  const [filter, setFilter] = useState<SelectBoxItemType>(filterItems[0])

  return (
    <>
      <div className="flex justify-between items-center my-6 font-semibold text-gray-700 dark:text-gray-200">
        <h2 className="text-3xl ">Tasks</h2>
        <div className="flex gap-3">
          <SelectBox
            title="Sort"
            items={orderItems}
            selectedItem={sort}
            setSelectedItem={setSort}
          />
          <SelectBox
            title="Filter"
            items={filterItems}
            selectedItem={filter}
            setSelectedItem={setFilter}
          />
        </div>
      </div>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full whitespace-no-wrap">
            <thead>
              <tr className="flex text-xs font-semibold tracking-wide text-gray-500 uppercase p-3 border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="flex items-center justify-center flex-1">
                  Status
                </th>
                <th className="flex items-center justify-start flex-3 md:flex-7 lg:flex-10">
                  Title
                </th>
                <th className="flex items-center justify-center flex-1">
                  Priority
                </th>
                <th className="flex items-center justify-center flex-1">
                  Open
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              <Task id={1} title="first task" priority={1} />
              <Task id={2} title="first task" priority={2} />
              <Task id={3} title="first task" priority={3} />
              <Task id={4} title="first task" priority={4} />
              <Task id={5} title="first task" priority={5} />
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-center px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          {/* <span className="flex items-center col-span-3">
            Showing 21-30 of 100
          </span> 
           <span className="col-span-2"></span> */}
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-4 h-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                    3
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    4
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    8
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    9
                  </button>
                </li>
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg
                      className="w-4 h-4 fill-current"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
    </>
  )
}

export default Tasks
