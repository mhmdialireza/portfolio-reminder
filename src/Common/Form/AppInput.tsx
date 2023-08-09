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
  type?: 'text' | 'password'
  disable?: boolean
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const AppInput = ({
  register,
  id,
  type,
  label,
  error,
  disable = false
}: Props) => {
  return (
    <div className="w-full flex flex-col gap-1 pb-3">
      <label className="text-gray-700 dark:text-gray-400" htmlFor={id}>
        {label}:
      </label>
      <input
        {...register}
        id={id}
        type={type ?? 'text'}
        className="rounded-lg h-9 border-2 p-3 block w-full mt-1 text-sm dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input"
        autoComplete="off"
        disabled={disable}
      />
      <p className="text-red-600">{error?.message as string}</p>
    </div>
  )
}

export default AppInput
