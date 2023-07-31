import { Listbox } from '@headlessui/react'
import {
  SelectBoxItemsType
} from '../../Components/SelectBox'
import { AiOutlineDown } from 'react-icons/ai'
import {
  FieldError,
  FieldErrorsImpl,
  Merge,
  UseFormSetValue
} from 'react-hook-form'
import { useEffect, useState } from 'react'
import { AddSchema } from '../../Schema/task.schema'

type Props = {
  setValue: UseFormSetValue<AddSchema>
  id: string
  label: string
  items: SelectBoxItemsType
  selectedItemIndex: number
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined
}

const AppSelectBox = ({
  setValue,
  id,
  label,
  items,
  selectedItemIndex,
  error
}: Props) => {
  const [selectedItem, setSelectedItem] = useState(items[selectedItemIndex])

  useEffect(() => {
    setValue('priority', selectedItem.id)
  }, [selectedItem])

  return (
    <div className="relative w-full text-gray-700 dark:text-gray-400  flex flex-col text-sm gap-1 [&>*]:px-4">
      <label htmlFor={id}>{label}:</label>
      <div className="border-2 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 dark:text-gray-300 dark:focus:shadow-outline-gray flex flex-col justify-between items-center bg-white w-full py-2 rounded-lg">
        <Listbox value={selectedItem} onChange={setSelectedItem}>
          <Listbox.Button className="capitalize border-purple-400 dark:border-gray-600 flex justify-between items-center w-full">
            {selectedItem.title}
            <AiOutlineDown />
          </Listbox.Button>
          <Listbox.Options className="absolute dark:border-gray-600 dark:bg-gray-700 focus:border-purple-400 focus:outline-none focus:shadow-outline-purple dark:text-gray-300 dark:focus:shadow-outline-gray form-input shadow-md shadow-purple-200 dark:shadow-gray-900 top-16 w-full p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md">
            {items.map(item => (
              <Listbox.Option
                key={item.id}
                value={item}
                disabled={item.unavailable}
              >
                <p className="capitalize cursor-pointer inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 ui-active:bg-gray-200 dark:ui-active:bg-gray-800">
                  {item.title}
                </p>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
      <p className="text-red-600">{error?.message as string}</p>
    </div>
  )
}

export default AppSelectBox
