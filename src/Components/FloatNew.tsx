import { FiPlus } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

type Props = {}

const FloatNew = ({}: Props) => {
  const navigate = useNavigate()
  const addTask = () => navigate('/tasks/add')

  return (
    <div
      className="absolute cursor-pointer p-3 right-5 bottom-5 rounded-full shadow-2xl hover:shadow-inner shadow-purple-900 dark:shadow-purple-900 bg-gray-50 dark:bg-gray-800"
      onClick={addTask}
    >
      <FiPlus className="text-3xl text-purple-500 dark:text-purple-700" />
    </div>
  )
}

export default FloatNew
