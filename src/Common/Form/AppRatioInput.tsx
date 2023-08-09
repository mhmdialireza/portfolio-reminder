import React from 'react'
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormRegisterReturn
} from 'react-hook-form'
import { option } from '../../Pages/Task'

type Props = {
  options: option[]
  checked: string
  register: UseFormRegisterReturn<string>
  label: string
  type?: 'text' | 'password'
  disable?: boolean
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const AppRatioInput = ({
  options,
  register,
  label,
  disable,
  checked,
  error
}: Props) => {
  return (
    <div className="text-sm w-full">
      <span className="text-gray-700 dark:text-gray-400 capitalize">
        {label}:
      </span>
      <div className="mt-2 flex gap-5">
        {options.map(option => (
          <label className="inline-flex items-center text-gray-600 dark:text-gray-400">
            <input
              {...register}
              disabled={disable && checked != option.value}
              type="radio"
              className="text-purple-600 form-radio focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
              value={option.value}
              checked={checked == option.value}
            />
            <span className="ml-2 capitalize">{option.title}</span>
          </label>
        ))}
      </div>
      <p className="text-red-600">{error?.message as string}</p>
    </div>
  )
}

export default AppRatioInput
