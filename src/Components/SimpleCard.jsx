import {Component} from "react";
import { Title } from "./Title";
import Description from "./Description";
import { Image } from "./Image";

class SimpleCard extends Component{
  render(){
    return(
      <>
        <div className="border-blue-500 border h-[230px] pb-2 w-[610px] flex gap-2 p-1 ">
          <div className="w-[250px] h-[100%]   ">
            <Image imageURL="https://hips.hearstapps.com/hmg-prod/images/happy-dog-outdoors-royalty-free-image-1652927740.jpg?crop=0.447xw:1.00xh;0.187xw,0&resize=980:*"  />
          </div>
          <div className="w-[100%] h-[100%] space-y-1 ">
            <Title  text="A Title" />
            <Description desText="All dogs descend from a species of wolf, but not the gray wolf (Canis lupus), like many people assume. In fact, DNA evidence suggests that the now-extinct wolf ..." />
          </div>
        </div>
      </>
    )
  }
}

export default SimpleCard