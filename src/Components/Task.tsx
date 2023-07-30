import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Priority from './Priority'

type Props = {
  id: number
  title: string
  priority: number
  isDone?: boolean
}

const Task = ({ id, title, priority, isDone = false }: Props) => {
  return (
    <tr className=" flex w-full text-gray-700 dark:text-gray-400 p-3">
      <td className="flex items-center justify-center flex-1 cursor-pointer">
          {isDone ?
           <ImCheckboxChecked /> 
           : 
          <ImCheckboxUnchecked />
          }
      </td>
      <td className="flex items-center justify-center flex-3 md:flex-7 lg:flex-10">
        <div className="flex items-center text-sm w-full">
          <p className="font-semibold">{title}</p>
        </div>
      </td>
      <td className="flex items-center justify-center flex-1">
        <div className="flex items-center justify-center text-sm">
          <Priority level={priority} />
        </div>
      </td>
      <td className="flex items-center justify-center flex-1">
        <Link to={`task/${id}`}>
          <FiExternalLink />
        </Link>
      </td>
    </tr>
  )
}

export default Task
