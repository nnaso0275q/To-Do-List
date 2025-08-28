import { Children } from "react"

 export const FilterButton=(onClick)=>{
    return(
        <button
        onClick={onClick}
        className={"px-3 h-8 rounded" `${
        active ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
      }`}
        >{Children}</button>
      
    )
 } 