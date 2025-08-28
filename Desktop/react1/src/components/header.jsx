//  export const Round=(props)=>{
//     // return <div className="w-25 h-25 bg-red-500 rounded-full"></div>
//     return <div className={`w-25 h-25 rounded-full`} style={{background: props.color }}></div>
// }

// export const Header=(props)=>{
//     return <div className={`text-white text-30xs`} style={{background: props}}></div>
// }

export const Header = (props) => {
  return <div className=" text-3xl mt-5 mx-5 ml-60">{props.head}</div>
  
    // <div style={{ background: props.background }} className="text-white text-xl font-bold p-2">
    //   {props.children}
    // </div>
  
};

