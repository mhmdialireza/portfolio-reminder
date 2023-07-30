import React from 'react'
import { FiPlus } from 'react-icons/fi'

type Props = {}

const AddTask = ({}: Props) => {
  return (
    <div
      className="absolute cursor-pointer p-3 right-5 bottom-5 rounded-full shadow-2xl hover:shadow-inner shadow-purple-900 dark:shadow-purple-900 bg-gray-50 dark:bg-gray-800"
    >
      <FiPlus className="text-3xl text-purple-500 dark:text-purple-700" />
    </div>
  )
}

export default AddTask
