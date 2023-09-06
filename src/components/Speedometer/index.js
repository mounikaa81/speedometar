// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="bg-con">
        <h1 className="speedometer">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="img"
          alt="speedometer"
        />
        <h1 className="heading2">Speed is {count}mph </h1>

        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="btn-con">
          <button
            className="button-accelerate"
            type="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="button-break"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
