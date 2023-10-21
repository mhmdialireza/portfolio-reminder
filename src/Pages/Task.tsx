import { zodResolver } from '@hookform/resolvers/zod'
import AppButton from '../Common/Form/AppButton'
import AppInput from '../Common/Form/AppInput'
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react'
import EditMode from '../Components/EditMode'
import AppToast from '../Utils/toastUtils'
import appAxios from '../Services/Axios/config'
import { UpdateTaskSchema, updateTaskSchema } from '../Schema/task.schema'
import ITask from '../Types/task.type'
import { useNavigate, useParams } from 'react-router-dom'
import { IUpdateTaskPayload } from '../Types/Api/task.type'
import AppTextArea from '../Common/Form/AppTextArea'
import AppRatioInput from '../Common/Form/AppRatioInput'
import Button from '../Common/Button'
import AppSelectBox from '../Common/Form/AppSelectBox'
import { priorities } from './AddTask'
import AppLoader from '../Common/AppLoader'
import useAppModal from './../Hooks/useAppModal'

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
  const { ModalWrapper, open, close, isOpen } = useAppModal({
    closeOnOverlayClick: true
  })

  useEffect(() => {
    appAxios
      .get(`tasks/${id}`)
      .then(res => {
        setTask(() => res.data.task)
        const { title, description, priority, status, remind_datetime } =
          res.data.task
        setValue('title', title)
        setValue('description', description)
        setValue('priority', priority)
        setValue('status', status)
        // setValue('remind_datetime', remind_datetime)
        // console.log('getValues', getValues())
      })
      .catch(err => {
        if (err.response.data.includes('No query results for model')) {
          navigate('/not-found')
        }
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
    try {
      const result = (await appAxios.put(`/tasks/${id}`, updateTaskPayload))
        .data
      setTask(() => result)
      setMode(() => Mode.show)
      AppToast.success('Task successfully updated')
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const changeMode = () => {
    if (mode == Mode.edit) {
      setValue('title', task?.title as string)
      setValue('description', task?.description as string)
      // setValue('priority', task?.priority as number)
      setValue('status', task?.status as 'done' | 'ongoing')

      setMode(() => Mode.show)
    } else {
      setMode(() => Mode.edit)
    }
  }

  const deleteHandler = () => {
    appAxios.delete(`tasks/${task?.id}`).then(() => {
      AppToast.success('Task deleted successfully')
      navigate('/tasks')
    })
  }

  if (!task) {
    ;<AppLoader />
  } else {
    return (
      <>
        <div className='container mx-auto grid max-w-3xl px-6'>
          <h2 className='my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200'>
            Task
          </h2>
          {getValues().status && (
            <form
              onSubmit={handleSubmit(submitForm)}
              className='relative flex flex-col items-center justify-center rounded-lg bg-white px-12 pb-6 pt-12 shadow-md dark:bg-gray-800'
            >
              <EditMode changeMode={changeMode} />
              <AppInput
                register={register('title')}
                id='title'
                label='title'
                error={errors.title}
                disable={mode == Mode.show}
              />
              <AppTextArea
                register={register('description')}
                id='description'
                label='description'
                error={errors.description}
                disable={mode == Mode.show}
              />

              {mode == Mode.show ? (
                <div className='flex w-full gap-2 pb-3 text-gray-400'>
                  <p>status: </p>
                  <p>{task?.status}</p>
                </div>
              ) : (
                <AppRatioInput
                  label='status'
                  options={options}
                  register={register('status')}
                />
              )}

              <AppSelectBox
                setValue={setValue}
                id='priority'
                items={priorities}
                label='priority'
                selectedItemIndex={2}
                error={errors.priority}
                disable={mode == Mode.show}
              />
              {/* <AppDateInput /> */}

              {mode == Mode.edit ? (
                <div className='mt-6 w-full pb-2'>
                  <AppButton
                    text='Submit'
                    loading={isSubmitting}
                    disable={!isDirty || !isValid || isSubmitting}
                  />
                </div>
              ) : (
                <div onClick={open} className='mt-6 w-full pb-2'>
                  <Button delet title='Delete' />
                </div>
              )}
            </form>
          )}
        </div>
        <ModalWrapper>
          <div className='flex w-full flex-col gap-3 rounded-lg px-7 py-4 dark:bg-gray-800 sm:rounded-lg'>
            <header className='flex justify-end'>
              <button
                className='inline-flex h-6 w-6 items-center justify-center rounded text-gray-400 transition-colors duration-150 hover:text-gray-700 dark:hover:text-gray-200'
                onClick={() => close()}
              >
                <svg
                  className='h-4 w-4'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                    fill-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </header>
            <div className=''>
              <p className='text-lg font-semibold text-gray-700 dark:text-gray-300'>
                Confirm
              </p>
              <p className='text-sm text-gray-700 dark:text-gray-400'>
                Do you want to delete this task?
              </p>
            </div>
            <footer className='flex flex-row items-center justify-center gap-4 bg-gray-50 pt-3 dark:bg-gray-800'>
              <button
                className='focus:shadow-outline-gray w-full rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium text-gray-700 transition-colors duration-150 hover:border-gray-500 focus:border-gray-500 focus:outline-none active:bg-transparent active:text-gray-500 dark:text-gray-400 sm:w-auto sm:px-4 sm:py-2'
                onClick={() => close()}
              >
                No
              </button>
              <button
                className='focus:shadow-outline-purple focus:shadow-outline-red w-full rounded-lg border border-transparent bg-red-600 px-5 py-3 text-sm font-medium text-white transition-colors duration-150 hover:bg-red-700 focus:outline-none active:bg-red-600 sm:w-auto sm:px-4 sm:py-2'
                onClick={deleteHandler}
              >
                Yes
              </button>
            </footer>
          </div>
        </ModalWrapper>
      </>
    )
  }
}

export default Task
