import { Link } from 'react-router-dom'
import { useAppSelector } from '../Redux/App/hooks'
import { authSelector } from '../Redux/Features/Auth/authSlice'

type Props = {}

const Home = (props: Props) => {
  const user = useAppSelector(authSelector)
  return (
    <div>
      <p>Home</p>
      <div>
        {user ? <Link to="/tasks">tasks</Link> : <Link to="/auth">auth</Link>}
      </div>
    </div>
  )
}

export default Home
