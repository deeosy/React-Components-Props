export function Title ({text}) {
  return(
    //  Ternary Operator to install default text 
    <h1 className="text-[50px] text-center border h-[40%] border-blue-300 rounded-lg ">{text ? text : "No Title" }</h1>
  )
}