import {Component} from "react"

class Description extends Component{
  render() {
    return (
      <div className="text-[18px] p-1 border h-[60%] border-blue-300 rounded-lg ">
        {/* Ternary Operator to install default text */}
        {this.props.desText ? this.props.desText : "No Description"} 
      </div>
    )
  }
}

export default Description