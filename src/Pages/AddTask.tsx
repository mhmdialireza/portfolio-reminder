import { useForm } from 'react-hook-form'
import AppInput from '../Common/Form/AppInput'
import { useNavigate } from 'react-router-dom'
import { AddSchema, addSchema } from '../Schema/task.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { IAddTaskPayload } from '../Types/Api/task.type'
import AppTextArea from '../Common/Form/AppTextArea'
import { SelectBoxItemsType } from '../Components/SelectBox'
import AppSelectBox from '../Common/Form/AppSelectBox'
import AppButton from './../Common/Form/AppButton'
import appAxios from '../Services/Axios/config'
import AppToast from '../Utils/toastUtils'

type Props = {}

export const priorities: SelectBoxItemsType = [
  { id: 1, title: 'very low', unavailable: false },
  { id: 2, title: 'low', unavailable: false },
  { id: 3, title: 'normal', unavailable: false },
  { id: 4, title: 'high', unavailable: false },
  { id: 5, title: 'very high', unavailable: false }
]

const AddTask = ({}: Props) => {
  const navigate = useNavigate()

  const { register, handleSubmit, formState, setValue } = useForm<AddSchema>({
    resolver: zodResolver(addSchema),
    mode: 'onTouched'
  })
  const { errors, isDirty, isValid, isSubmitting } = formState

  const submitForm = async (addTaskPayload: IAddTaskPayload) => {
    try {
      (await appAxios.post('/tasks/add', addTaskPayload)).data
      AppToast.success('Task added successfully')
      navigate('/tasks')
    } catch (error) {
      console.log(error?.response?.data)
      AppToast.error(error?.response?.data)
    }
  }

  return (
    <>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Add Task
      </h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="px-4 py-3 mb-8 bg-white rounded-lg shadow-md dark:bg-gray-800"
      >
        <AppInput
          id="title"
          label="title"
          register={register('title')}
          error={errors.title}
        />

        <AppTextArea
          id="description"
          label="description"
          register={register('description')}
          error={errors.description}
        />

        <AppSelectBox
          setValue={setValue}
          id="priority"
          items={priorities}
          label="priority"
          selectedItemIndex={2}
          error={errors.priority}
        />
        <div className="mt-6 pb-2">
          <AppButton
            text="Add"
            loading={isSubmitting}
            disable={!isDirty || !isValid || isSubmitting}
          />
        </div>
      </form>
    </>
  )
}

export default AddTask
