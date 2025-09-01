// export const Input=(props)=>{
    // return <div className="w-60 h-10  border-1 border-gray-300 text-black rounded "
    //           placeholder=" Add a new task..."</div>

// import { ReactJsxRuntime } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints"

// }

export const Input=({value, onChange, placeholder})=>{

    return(<input 
        className="w-60 h-10 border  border-gray-300 text-black rounded px-2 focus:outline-none focus:ring-2 focus:ring-[#3C82F6]" 
        type="text" 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ></input>)
   
      
    } 