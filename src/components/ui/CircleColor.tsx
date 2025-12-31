import type { HTMLAttributes } from "react";

interface IProps extends HTMLAttributes<HTMLSpanElement> {
color:string;
}
const CircleColor = ({color, ...rest}: IProps) => {
  return (
    <span className={`block rounded-full w-5 h-5 cursor-pointer mb-1`} style={{background:color}} {...rest}></span>
  )
}

export default CircleColor