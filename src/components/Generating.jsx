import { loading } from "../assets"

const Generating = ({className}) => {
  return (
      <div className={`${className} flex items-center bg-n-8/80 px-6 h-[3.5rem] rounded-[1.7rem]`}>
          <img src={loading} className="w-5 h-5 mr-4" alt="loading" />
          AI is generating
      </div>
  )
}

export default Generating