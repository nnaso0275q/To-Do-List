
 export const FilterButton = ({onClick, active, children})=>{
    return(
        <button
        onClick={onClick}
        className={`px-3 h-8 rounded ${
        active ? "bg-blue-500 text-white" : "bg-[#F3F4F6] text-[#363636]"
      }`}
        >{children}</button>
    )
 } 