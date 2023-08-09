import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { FiExternalLink } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Priority from './Priority'
import { useAppDispatch } from './../Redux/App/hooks'
import { changeStatus } from '../Redux/Features/Task/taskService'
import ITask from '../Types/task.type'

type Props = {
  task: ITask
}

const Task = ({ task }: Props) => {
  const { id, title, status, priority } = task

  const dispatch = useAppDispatch()

  const doneOrOngoing = (id: number) => {
    console.log(id)
    dispatch(changeStatus({ id }))
  }

  return (
    <tr className=" flex w-full text-gray-700 dark:text-gray-400 p-3">
      <td
        className="flex items-center justify-center flex-1 cursor-pointer"
        onClick={() => doneOrOngoing(id)}
      >
        {status == 'done' ? <ImCheckboxChecked /> : <ImCheckboxUnchecked />}
      </td>
      <td className="flex items-center justify-center flex-3 md:flex-7 lg:flex-10">
        <Link to={`/tasks/${id}`} className="flex items-center text-sm w-full">
          <p className="font-semibold">{title}</p>
        </Link>
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
