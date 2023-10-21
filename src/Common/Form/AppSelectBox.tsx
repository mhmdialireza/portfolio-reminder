import { Listbox } from '@headlessui/react'
import { SelectBoxItemsType } from '../../Components/SelectBox'
import { AiOutlineDown } from 'react-icons/ai'
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormSetValue
} from 'react-hook-form'
import { useEffect, useState } from 'react'

type Props = {
  setValue: UseFormSetValue<any>
  id: string
  label: string
  items: SelectBoxItemsType
  selectedItemIndex: number
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
  disable?: Boolean
}

const AppSelectBox = ({
  setValue,
  id,
  label,
  items,
  selectedItemIndex,
  error,
  disable = false
}: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[selectedItemIndex])

  useEffect(() => {
    setValue('priority', selectedItem.id)
  }, [selectedItem])

  return (
    <div className='relative flex w-full flex-col  gap-1 text-sm text-gray-700 dark:text-gray-400 [&>*]:px-4'>
      <label htmlFor={id}>{label}:</label>
      <div className='dark:focus:shadow-outline-gray flex w-full flex-col items-center justify-between rounded-lg border-2 bg-white py-2 focus:border-purple-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300'>
        <Listbox
          value={selectedItem}
          onChange={setSelectedItem}
          disabled={disable}
        >
          <Listbox.Button className='flex w-full items-center justify-between border-purple-400 capitalize dark:border-gray-600'>
            {selectedItem.title}
            <AiOutlineDown />
          </Listbox.Button>
          <Listbox.Options className='focus:shadow-outline-purple dark:focus:shadow-outline-gray form-input absolute top-16 mt-2 w-full space-y-2 rounded-md border border-gray-100 bg-white p-2 text-gray-600 shadow-md shadow-purple-200 focus:border-purple-400 focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:shadow-gray-900'>
            {items.map(item => (
              <Listbox.Option
                key={item.id}
                value={item}
                disabled={item.unavailable}
              >
                <p className='inline-flex w-full cursor-pointer items-center rounded-md px-2 py-1 text-sm font-semibold capitalize transition-colors duration-150 hover:bg-gray-100 hover:text-gray-800 ui-active:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 dark:ui-active:bg-gray-800'>
                  {item.title}
                </p>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <p className='text-red-600'>{error?.message as string}</p>
    </div>
  )
}

export default AppSelectBox
