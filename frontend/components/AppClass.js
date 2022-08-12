import React from 'react'

export default class AppClass extends React.Component {
  // THE FOLLOWING HELPERS ARE JUST RECOMMENDATIONS.
  // You can delete them and build your own logic from scratch.
  state = {
  initialMessage: '',
  initialEmail: '',
  initialSteps: 0,
  initialIndex: 4,
  xValue: 0,
  yValue: 0,
  }

  getXY = () => {
    // It it not necessary to have a state to track the coordinates.
    // It's enough to know what index the "B" is at, to be able to calculate them.
    //gett coordinates based on index and set them to state in getNextIndex
    console.log( )
  }
    

  getXYMessage = () => {
    // It it not necessary to have a state to track the "Coordinates (2, 2)" message for the user.
    // You can use the `getXY` helper above to obtain the coordinates, and then `getXYMessage`
    // returns the fully constructed string.
    
  }

  reset = () => {
    this.setState({
        initialMessage: '',
        initialEmail: '',
        initialSteps: 0,
        initialIndex: 4,
        xvalue: 0,
        yvalue: 0,
    })
  }

  getNextIndex = (direction) => {
    // This helper takes a direction ("left", "up", etc) and calculates what the next index
    // of the "B" would be. If the move is impossible because we are at the edge of the grid,
    // this helper should return the current index unchanged.
    if(direction === 'left' && this.state.initialIndex === 0) return this.state.initialIndex
    if(direction === 'left' && this.state.initialIndex === 3) return this.state.initialIndex
    if(direction === 'left' && this.state.initialIndex === 6) return this.state.initialIndex

    if(direction === 'right' && this.state.initialIndex === 2) return this.state.initialIndex
    if(direction === 'right' && this.state.initialIndex === 5) return this.state.initialIndex
    if(direction === 'right' && this.state.initialIndex === 8) return this.state.initialIndex

    if(direction === 'up' && this.state.initialIndex === 0) return this.state.initialIndex
    if(direction === 'up' && this.state.initialIndex === 1) return this.state.initialIndex
    if(direction === 'up' && this.state.initialIndex === 2) return this.state.initialIndex

    if(direction === 'down' && this.state.initialIndex === 6) return this.state.initialIndex
    if(direction === 'down' && this.state.initialIndex === 7) return this.state.initialIndex
    if(direction === 'down' && this.state.initialIndex === 8) return this.state.initialIndex

    if(direction === 'left') return this.state.initialIndex -1
    if(direction === 'right')return  this.state.initialIndex +1
    if(direction === 'up')return  this.state.initialIndex -3
    if(direction === 'down')return  this.state.initialIndex +3
    }

  

  move = (evt) => {
    // This event handler can use the helper above to obtain a new index for the "B",
    // and change any states accordingly.}
      
      this.setState({...this.state, 
        initialIndex : this.getNextIndex(evt.target.id),
      })


  }

  onChange = (evt) => {
    // You will need this to update the value of the input.
  }

  onSubmit = (evt) => {
    // Use a POST request to send a payload to the server.
  }

  render() {
    console.log(this.getXY())
    const { className } = this.props
    return (
      <div id="wrapper" className={className}>
        <div className="info">
          <h3 id="coordinates">Coordinates (2, 2)</h3>
          <h3 id="steps">You moved {this.state.initialSteps} times</h3>
        </div>
        <div id="grid">
          {
            [0, 1, 2, 3, 4, 5, 6, 7, 8].map(idx => (
              <div key={idx} className={`square${idx === this.state.initialIndex ? ' active' : ''}`}>
                {idx === this.state.initialIndex ? 'B' : null}
              </div>
            ))
          }
        </div>
        <div className="info">
          <h3 id="message"></h3>
        </div>
        <div id="keypad">
          <button onClick={this.move} id="left">LEFT</button>
          <button onClick={this.move} id="up">UP</button>
          <button onClick={this.move}  id="right">RIGHT</button>
          <button onClick={this.move} id="down">DOWN</button>
          <button onClick={this.reset} id="reset">reset</button>
        </div>
        <form>
          <input id="email" type="email" placeholder="type email"></input>
          <input id="submit" type="submit"></input>
        </form>
      </div>
    )
  }
}
