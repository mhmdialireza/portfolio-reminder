import { FiEdit } from 'react-icons/fi'

type Props = {
  changeMode: () => void
}

const EditMode = ({ changeMode }: Props) => {
  return (
    <div onClick={changeMode} className="absolute top-3 right-3 rounded-full dark:bg-gray-900 bg-gray-100 shadow shadow-purple-400 p-3 cursor-pointer text-purple-600 hover:text-purple-700 grid justify-items-center">
      <FiEdit />
    </div>
  )
}

export default EditMode
