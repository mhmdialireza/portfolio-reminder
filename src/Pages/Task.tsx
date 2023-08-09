import { zodResolver } from '@hookform/resolvers/zod'
import AppButton from '../Common/Form/AppButton'
import AppInput from '../Common/Form/AppInput'
import { useAppDispatch } from '../Redux/App/hooks'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import EditMode from '../Components/EditMode'
import AppToast from '../Utils/toastUtils'
import appAxios from '../Services/Axios/config'
import { UpdateTaskSchema, updateTaskSchema } from '../Schema/task.schema'
import ITask from '../Types/task.type'
import { useNavigate, useParams } from 'react-router-dom'
import { IUpdateTaskPayload } from '../Types/Api/task.type'
import { updateTask } from '../Redux/Features/Task/taskService'
import AppTextArea from '../Common/Form/AppTextArea'
import AppRatioInput from '../Common/Form/AppRatioInput'
import AppDateInput from '../Common/Form/AppDateInput'
import Button from '../Common/Button'

enum Mode {
  show = 'show',
  edit = 'edit'
}

export type option = {
  id: string
  value: string
  title: string
}

const options: option[] = [
  { id: 'ongoing', value: 'ongoing', title: 'Ongoing' },
  { id: 'done', value: 'done', title: 'Done' }
]

type Props = {}

const Task = ({}: Props) => {
  const [mode, setMode] = useState<Mode>(Mode.show)
  const [task, setTask] = useState<undefined | ITask>()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    appAxios.get(`tasks/${id}`).then(res => {
      setTask(() => res.data.task)
      const { title, description, priority, status, remind_datetime } =
        res.data.task
      setValue('title', title)
      setValue('description', description)
      setValue('priority', priority)
      setValue('status', status)
      setValue('remind_datetime', remind_datetime)
    })
  }, [])

  const { register, handleSubmit, formState, setValue, getValues } =
    useForm<UpdateTaskSchema>({
      resolver: zodResolver(updateTaskSchema),
      mode: 'onTouched'
      // defaultValues: { ...task }
    })
  const { errors, isDirty, isValid, isSubmitting } = formState

  const submitForm = async (updateTaskPayload: IUpdateTaskPayload) => {
    // console.log(updateTaskPayload);
    // if (result.type === 'auth/update-Task/fulfilled') {
    //   setMode(() => Mode.show)
    //   AppToast.success('Task successfully updated')
    // }
    // console.log(result.payload.data.errors);
  }

  const changeMode = () => {
    setMode(() => (mode == Mode.edit ? Mode.show : Mode.edit))
  }

  const deleteHandler = (id: any) => {
    appAxios.delete(`tasks/${id}`).then(() => {
      AppToast.success('task deleted successfully')
      navigate('/tasks')
    })
  }

  return (
    <div className="container px-6 mx-auto grid">
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Task
      </h2>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="relative pt-10 pb-3 px-10 bg-white rounded-lg shadow-md dark:bg-gray-800 flex lg:gap-10 lg:p-16 justify-center items-center flex-col"
      >
        <EditMode changeMode={changeMode} />

        <AppInput
          register={register('title')}
          id="title"
          label="title"
          error={errors.title}
          disable={mode == Mode.show}
        />
        <AppTextArea
          register={register('description')}
          id="description"
          label="description"
          error={errors.description}
          disable={mode == Mode.show}
        />
        <AppRatioInput
          label="status"
          options={options}
          register={register('status')}
          disable={mode == Mode.show}
          checked={getValues('status')}
        />
        {/* <AppDateInput /> */}

        {mode == Mode.edit ? (
          <div className="w-full mt-6 pb-2">
            <AppButton
              text="Submit"
              loading={isSubmitting}
              disable={!isDirty || !isValid || isSubmitting}
            />
          </div>
        ) : (
          <div
            onClick={() => deleteHandler(task?.id)}
            className="w-full mt-6 pb-2"
          >
            <Button delet title="Delete" />
          </div>
        )}
      </form>
    </div>
  )
}

export default Task
