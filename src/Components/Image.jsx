export function Image ({imageURL}){
  return(
    // Ternary Operator to install default image
    <img src={imageURL ? imageURL : "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg?w=1800" } alt="" className="object-cover w-[100%] h-[100%] rounded-lg  "/>
  )
}
\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\]