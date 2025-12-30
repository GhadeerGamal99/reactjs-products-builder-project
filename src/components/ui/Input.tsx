import type { InputHTMLAttributes } from "react"

interface IProps extends InputHTMLAttributes<HTMLInputElement>{

}
const Input = ({...rest}: IProps) => {
  return (
    <input className="border border-gray-300 focus:border-indigo-500 focus:outline-none focus:ring-1
     focus:ring-indigo-500 rounded-lg shadow-md px-3 py-3 text-md" {...rest}/>
  )
}

export default Input