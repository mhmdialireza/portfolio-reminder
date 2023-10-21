import { zodResolver } from '@hookform/resolvers/zod'
import AppButton from '../Common/Form/AppButton'
import AppInput from '../Common/Form/AppInput'
import { useAppDispatch, useAppSelector } from '../Redux/App/hooks'
import { useForm } from 'react-hook-form'
import { IUpdateProfilePayload } from '../Types/Api/auth.type'
import { UpdateProfileSchema, updateProfileSchema } from '../Schema/auth.schema'
import { updateProfile } from '../Redux/Features/Auth/authService'
import AppFileInput from '../Common/Form/AppFileInput'
import { useState } from 'react'
import { authSelector } from '../Redux/Features/Auth/authSlice'
import EditMode from '../Components/EditMode'
import AppToast from '../Utils/toastUtils'
import { BASE_URL } from '../Services/Axios/config'

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
    updateProfilePayload.profile_image = updateProfilePayload.profile_image[0]
    // console.log(updateProfilePayload);
    const result = await dispatch(updateProfile(updateProfilePayload))
    if (result.type === 'auth/update-profile/fulfilled') {
      setMode(() => Mode.show)
      AppToast.success('profile successfully updated')
    }
    // console.log(result.payload.data.errors);
  }

  const changeMode = () => {
    setMode(() => (mode == Mode.edit ? Mode.show : Mode.edit))
  }

  return (
    <main className='container max-w-3xl mx-auto grid justify-items-center px-6'>
      <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
        Profile
      </h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className='relative flex w-full flex-col items-center justify-center rounded-lg bg-white px-4 py-5 shadow-md dark:bg-gray-800'
      >
        <EditMode changeMode={changeMode} />
        <div className='flex h-44 w-44 items-center justify-center overflow-hidden rounded-full'>
          <img
            src={
              user?.profile_image_path
                ? BASE_URL + user?.profile_image_path
                : '/img/avatar.jpg'
            }
            alt='profile image'
          />
        </div>
        <div className='w-full flex-1'>
          {mode == Mode.edit && (
            <AppFileInput
              register={register('profile_image')}
              id='profile_image'
              label='profile image'
              error={errors.profile_image}
            />
          )}
          <AppInput
            register={register('username')}
            id='username'
            label='username'
            error={errors.username}
            disable={mode == Mode.show}
          />
          <AppInput
            register={register('email')}
            id='email'
            label='email'
            error={errors.email}
            disable={mode == Mode.show}
          />
          <div className='mt-6 pb-2'>
            {mode == Mode.edit && (
              <AppButton
                text='Submit'
                loading={isSubmitting}
                disable={!isDirty || !isValid || isSubmitting}
              />
            )}
          </div>
        </div>
      </form>
    </main>
  )
}

export default Profile
