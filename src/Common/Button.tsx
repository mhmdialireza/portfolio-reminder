import classNames from 'classnames'

interface Props {
  title: string
  // not allowed to use delete word
  delet?: boolean
  disable?: boolean
}

const Button = ({ title, delet, disable = false }: Props) => {
  return (
    <button
      type="submit"
      disabled={disable}
      className={classNames(
        'w-full cursor-pointer flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none',
        {
          'bg-purple-600 active:bg-purple-600 hover:bg-purple-700 focus:shadow-outline-purple':
            delet == false,
          'bg-red-600 active:bg-red-600 hover:bg-red-700 focus:shadow-outline-red':
            delet == true
        }
      )}
    >
      <p className="w-full text-center">{title}</p>
    </button>
  )
}

export default Button
