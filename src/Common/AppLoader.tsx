import { TailSpin } from 'react-loader-spinner'

type Props = {
  color?: string
}
const AppLoader = ({ color }: Props) => {
  return (
    <div className="h-full w-full grid place-items-center bg-gray-50 dark:bg-gray-900  text-purple-600 dark:text-purple-300">
      <TailSpin
        height="30"
        width="30"
        color={color == 'dark'?'dark:text-purple-300':'rgb(147 51 234 / var(--tw-text-opacity))'}
        ariaLabel="tail-spin-loading"
        radius="1"
        visible={true}
      />
    </div>
  )
}

export default AppLoader
