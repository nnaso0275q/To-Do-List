
 export const FilterButton = ({onClick, active, children})=>{
    return(
        <button
        onClick={onClick}
        className={`px-3 h-8 rounded ${
        active ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-600"
      }`}
        >{children}</button>
    )
 } 