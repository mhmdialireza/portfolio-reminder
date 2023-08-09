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
  disable?: boolean
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const AppTextArea = ({ id, label, register, disable, error }: Props) => {
  return (
    <div className="w-full flex flex-col gap-1 pb-3">
      <label className="text-gray-700 dark:text-gray-400" htmlFor={id}>
        {label}:
      </label>
      <textarea
        disabled={disable}
        {...register}
        id={id}
        className="rounded-lg border-2 p-2 block w-full mt-1 text-sm dark:text-gray-300 dark:border-gray-600 dark:bg-gray-700 form-textarea focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:focus:shadow-outline-gray"
        rows={3}
        // placeholder={`enter your ${label}`}
      ></textarea>

      <p className="text-red-600">{error?.message as string}</p>
    </div>
  )
}

export default AppTextArea
