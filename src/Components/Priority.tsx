import cn from 'classnames'

type Props = {
  level: number
}

const titles: string[] = ['very low', 'low', 'normal', 'high', 'very high']

const Priority = ({ level }: Props) => {
  const className = cn('text-xs text-white  px-2 rounded-lg', {
    'bg-orange-400': level == 1,
    'bg-orange-500': level == 2,
    'bg-green-600': level == 3,
    'bg-red-600': level == 4,
    'bg-red-800': level == 5
  })

  return <p className={className}>{titles[level - 1]}</p>
}

export default Priority
