
export const AddButton=({onClick, children})=>{

   return(
    <button 
    className="text-white bg-blue-500 w-20 h-10 rounded "
    onClick={onClick}
    >{children}</button>
   )
}