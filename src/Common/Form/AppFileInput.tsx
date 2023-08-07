import { useEffect } from 'react'
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn
} from 'react-hook-form'

type Props = {
  register: UseFormRegisterReturn<string>
  id: string
  label: string
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const AppFileInput = ({ id, label, register, error }: Props) => {
  return (
    <div className="flex flex-col gap-1 py-3">
      <label className="text-gray-700 dark:text-gray-400" htmlFor={id}>
        {label}:
      </label>
      <input
        className="h-9 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 file:border-0 file:h-full file:hover:bg-purple-700 file:bg-purple-600 file:text-gray-50 file:px-6 file:cursor-pointer file:mr-3"
        {...register}
        id={id}
        type="file"
      />
      <p className="text-red-600">{error?.message as string}</p>
    </div>
  )
}

export default AppFileInput
