export const Task =(props)=>{
    return (
        <div className=" h-[65] bg-[#F9FAFB] rounded-md flex items-center pl-4">
            <input type="checkbox" className="w-5 h-5 "></input>
            <p>{props.Task}</p>
       
        </div>
    )
}