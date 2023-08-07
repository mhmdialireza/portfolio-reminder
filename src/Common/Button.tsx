interface Props {
  title: string
  disable?: boolean
}

const Button = ({ title, disable = false }: Props) => {
  return (
    <button
      type="submit"
      disabled={disable}
      className="cursor-pointer flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple w-full"
    >
      <p className="w-full text-center">{title}</p>
    </button>
  )
}

export default Button
