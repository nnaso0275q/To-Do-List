// export const Input=(props)=>{
    // return <div className="w-60 h-10  border-1 border-gray-300 text-black rounded "
    //           placeholder=" Add a new task..."</div>

// import { ReactJsxRuntime } from "next/dist/server/route-modules/app-page/vendored/rsc/entrypoints"

// }
//  placeholder = {props.placeholder}
// onChange = {props.OnChange}

export const Input=({value, onChange, placeholder})=>{
    return(<input 
        className="w-60 h-10  border border-gray-300 text-black rounded px-2" 
        type="text" 
        // placeholder=" Add a new task..." 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ></input>)
   
      
}
// export const placeholder ={props}=>{
//     return 
// }