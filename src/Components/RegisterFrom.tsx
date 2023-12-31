import { useAppDispatch } from '../Redux/App/hooks'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod/src/zod.js'
import { RegisterSchema, registerSchema } from '../Schema/auth.schema'
import { useForm } from 'react-hook-form'
import { IRegisterPayload } from '../Types/Api/auth.type'
import { registerUser } from '../Redux/Features/Auth/authService'
import AppInput from '../Common/Form/AppInput'
import AppButton from '../Common/Form/AppButton'
import { FormEnum } from '../Pages/Auth'

type Props = {
  setForm: React.Dispatch<React.SetStateAction<FormEnum>>
}

const RegisterFrom = ({ setForm }: Props) => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched'
  })
  const { errors, isDirty, isValid, isSubmitting } = formState

  const submitForm = async (registerPayload: IRegisterPayload) => {
    const result = await dispatch(registerUser(registerPayload))
    if (result.type === 'auth/register/fulfilled') {
      navigate('/tasks')
    }
  }

  const changeForm = () => {
    setForm(FormEnum.LOGIN)
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} className="w-full">
      <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
        Register
      </h1>

      <AppInput
        register={register('username')}
        id="username"
        label="username"
        error={errors.username}
      />

      <AppInput
        register={register('email')}
        id="email"
        label="email"
        error={errors.email}
      />

      <AppInput
        register={register('password')}
        type="password"
        id="password"
        label="password"
        error={errors.password}
      />

      <AppInput
        register={register('password_confirmation')}
        type="password"
        id="password_confirmation"
        label="repeat password"
        error={errors.password_confirmation}
      />

      <div className="mt-6 pb-2">
        <AppButton
          text="Register"
          fill
          loading={isSubmitting}
          disable={!isDirty || !isValid || isSubmitting}
        />
      </div>

      {/* <hr className="my-8" />

              <button className="flex items-center justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                Github
              </button>
              <button className="flex items-center justify-center w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-white text-gray-700 transition-colors duration-150 border border-gray-300 rounded-lg dark:text-gray-400 active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:outline-none focus:shadow-outline-gray">
                <svg
                  className="w-4 h-4 mr-2"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
                Twitter
              </button>
              */}
      <p className="mt-4">
        <button
          className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
          onClick={changeForm}
        >
          Do you have account?
        </button>
      </p>
    </form>
  )
}

export default RegisterFrom
