import { Listbox } from '@headlessui/react'
import { AiOutlineDown } from 'react-icons/ai'

export type SelectBoxItemType = {
  id: number
  title: string
  unavailable: boolean
}

export type SelectBoxItemsType = SelectBoxItemType[]

type Props = {
  title: string
  items: SelectBoxItemsType
  selectedItem: SelectBoxItemType
  setSelectedItem: React.Dispatch<React.SetStateAction<SelectBoxItemType>>
}

const SelectBox = ({ title, items, selectedItem, setSelectedItem }: Props) => {
  return (
    <div className="relative flex flex-col text-sm w-36 gap-1 [&>*]:px-4">
      <p>{title}</p>
      <div className="shadow-md flex flex-col justify-between items-center bg-white dark:bg-gray-800 py-2 rounded-lg">
        <Listbox value={selectedItem} onChange={setSelectedItem}>
          <Listbox.Button className="capitalize flex justify-between items-center w-full">
            {selectedItem.title}
            <AiOutlineDown />
          </Listbox.Button>
          <Listbox.Options className="absolute shadow-md shadow-purple-200 dark:shadow-gray-900 top-16 w-full p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md dark:border-gray-700 dark:text-gray-300 dark:bg-gray-700">
            {items.map(item => (
              <Listbox.Option
                key={item.id}
                value={item}
                disabled={item.unavailable}
              >
                {/* {({ active, selected }) => ( */}
                <p
                  className="capitalize cursor-pointer inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md
                   hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 ui-active:bg-gray-200 dark:ui-active:bg-gray-800"
                >
                  {item.title}
                </p>
                {/* )} */}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Listbox>
      </div>
    </div>
  )
}

export default SelectBox
