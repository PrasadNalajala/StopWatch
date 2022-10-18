// Write your code here
/* -add bg for both lg and sm
-create timer card
-set justify-content as row in lg and column in sm
- add timer , minutes , seconds to state
-create start function and create set interval then increase timer value in it
-define minutes as timer/60
-define seconds as timer%60
-create stop function and clear interval
-create reset function and update timer as 0 in state
*/

import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timer: 0, isTimerRunning: false}

  start = () => {
    const {isTimerRunning} = this.state
    if (!isTimerRunning) {
      this.timerId = setInterval(this.onStart, 1000)
    }
  }

  onStart = () => {
    console.log('cliked')
    this.setState(prev => ({timer: prev.timer + 1, isTimerRunning: true}))
  }

  stop = () => {
    const {isTimerRunning} = this.state
    if (isTimerRunning) {
      clearInterval(this.timerId)
      this.setState({isTimerRunning: false})
    }
  }

  reset = () => {
    this.stop()
    this.setState({timer: 0, isTimerRunning: false})
  }

  render() {
    const {timer} = this.state

    const minutes = parseInt(timer / 60)
    const minZero = minutes < 10 && '0'
    const seconds = parseInt(timer % 60)
    const secZero = seconds < 10 && '0'
    console.log(timer)
    return (
      <div className="bg">
        <h1 className="heading">StopWatch</h1>
        <div className="card">
          <div className="timerBg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
            />
            <h1 className="timerText">Timer</h1>
          </div>
          <h1 className="timer">
            {minZero}
            {minutes}:{secZero}
            {seconds}
          </h1>
          <div>
            <button type="button" className="btn startBtn" onClick={this.start}>
              Start
            </button>
            <button type="button" className="btn stopBtn" onClick={this.stop}>
              Stop
            </button>
            <button type="button" className="btn resetBtn" onClick={this.reset}>
              Reset
            </button>
          </div>
        </div>
        <p className="text">Made With ❤️By Prasad</p>
      </div>
    )
  }
}
export default Stopwatch
