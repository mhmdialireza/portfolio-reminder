import { zodResolver } from '@hookform/resolvers/zod'
import AppButton from '../Common/Form/AppButton'
import AppInput from '../Common/Form/AppInput'
import { useAppDispatch, useAppSelector } from '../Redux/App/hooks'
import { useForm } from 'react-hook-form'
import { IUpdateProfilePayload } from '../Types/Api/auth.type'
import { UpdateProfileSchema, updateProfileSchema } from '../Schema/auth.schema'
import { updateProfile, userInfo } from '../Redux/Features/Auth/authService'
import AppFileInput from '../Common/Form/AppFileInput'
import { useEffect, useState } from 'react'
import { authSelector } from '../Redux/Features/Auth/authSlice'
import Button from '../Common/Button'
import EditMode from '../Components/EditMode'
import AppToast from '../Utils/toastUtils'

enum Mode {
  show = 'show',
  edit = 'edit'
}

type Props = {}

const Profile = ({}: Props) => {
  const [mode, setMode] = useState<Mode>(Mode.show)
  const { user } = useAppSelector(authSelector)
  const dispatch = useAppDispatch()

  const { register, handleSubmit, formState } = useForm<UpdateProfileSchema>({
    resolver: zodResolver(updateProfileSchema),
    mode: 'onTouched',
    defaultValues: { ...user }
  })
  const { errors, isDirty, isValid, isSubmitting } = formState

  const submitForm = async (updateProfilePayload: IUpdateProfilePayload) => {
    const result = await dispatch(updateProfile(updateProfilePayload))
    if (result.type === 'auth/update-profile/fulfilled') {
      setMode(() => Mode.show)
      AppToast.success('profile successfully updated')
    }
  }

  const changeMode = () => {
    setMode(() => (mode == Mode.edit ? Mode.show : Mode.edit))
  }

  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Profile
      </h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="relative px-4 py-5 bg-white rounded-lg shadow-md dark:bg-gray-800 flex lg:flex-row lg:gap-10 lg:p-16 justify-center items-center flex-col"
      >
        <EditMode changeMode={changeMode} />
        <div className="rounded-full overflow-hidden w-44 h-44 lg:w-80 lg:h-80 flex items-center justify-center">
          <img src="/img/avatar.jpg" alt="profile image" />
        </div>
        <div className="flex-1 w-full">
          {mode == Mode.edit && (
            <AppFileInput
              register={register('profile_image')}
              id="profile_image"
              label="profile image"
              error={errors.profile_image}
            />
          )}
          <AppInput
            register={register('username')}
            id="username"
            label="username"
            error={errors.username}
            disable={mode == Mode.show}
          />
          <AppInput
            register={register('email')}
            id="email"
            label="email"
            error={errors.email}
            disable={mode == Mode.show}
          />
          <div className="mt-6 pb-2">
            {mode == Mode.edit && (
              <AppButton
                text="Submit"
                loading={isSubmitting}
                disable={!isDirty || !isValid || isSubmitting}
              />
            )}
          </div>
        </div>
      </form>
    </div>
  )
}

export default Profile
