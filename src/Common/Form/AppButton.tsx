import { TailSpin } from 'react-loader-spinner'

interface propInterface {
  text: string
  fill?: boolean
  disable?: boolean
  loading: boolean
}

const AppButton = ({ text, disable, loading }: propInterface) => {
  return (
    <button
      type="submit"
      disabled={disable}
      className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple w-full"
    >
      <p className="w-full text-center">
        {loading ? (
          <div className="w-full h-full grid justify-items-center">
            <TailSpin
              height="1.5rem"
              width="1.5rem"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="3"
              // wrapperStyle={{}}
              // wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          text
        )}
      </p>
    </button>
  )
}

export default AppButton
