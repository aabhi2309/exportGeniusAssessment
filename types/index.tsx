import { MouseEventHandler } from "react"

export interface CustomButtonProps {
    title:string,
    buttonStyle?:string,
    handleClick?:MouseEventHandler<HTMLButtonElement>,
    btnType?:"button" | "submit"
}