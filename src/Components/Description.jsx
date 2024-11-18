import {Component} from "react"

class Description extends Component{
  render() {
    return (
      <div className="text-[20px] ">
        {/* Ternary Operator to install default text */}
        {this.props.desText ? this.props.desText : "No Description"} 
      </div>
    )
  }
}

export default Description