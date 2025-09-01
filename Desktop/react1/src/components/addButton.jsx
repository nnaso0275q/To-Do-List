
export const AddButton=({onClick, children})=>{

   return(
    <button 
    className="text-white bg-blue-500 hover:bg-blue-400 w-20 h-10 rounded hover:duration-[0.3s] "
    onClick={onClick}
    >{children}</button>
   )
}