export function Title ({text}) {
  return(
    <h1 className="text-[50px] text-center border ">{text ? text : "No Title" }</h1>
  )
}