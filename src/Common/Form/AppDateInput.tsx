import { useState, useEffect } from 'react'
import DatePicker from 'react-datepicker'

type Props = {
  dateTime: string
}

const AppDateInput = ({ dateTime }: Props) => {
  const [startDate, setStartDate] = useState(dateTime)
  useEffect(() => {
    console.log(new Date())
  })

  return (
    <div className="w-full mt-4">
      <DatePicker
        showTimeSelect
        className="bg-gray-600 text-gray-100 outline-none rounded-lg p-1.5 w-full"
        selected={startDate}
        onChange={(date: any) => setStartDate(date)}
        dateFormat="Pp"
      />
    </div>
  )
}

export default AppDateInput
