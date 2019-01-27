import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentTurn: "X",
        currentGameInputs: [
            [null, null, null],
            [null, null, null],
            [null, null, null]]
      };

      this.onClick = this.onClick.bind(this);
  }

  onClick(y, x) {
      console.log('onClick fires:', y, x);
      // this.currentGameInput[y][x] = this.state.currentTurn;
      // if (this.state.currentTurn === "X") {
      //     this.setState({
      //         currentTurn: "Y"
      //     })
      // } else {
      //     this.setState({
      //         currentTurn: "X"
      //     })
      // }
  }

  render() {
    return (
        <div>
            <h2>Game</h2>
            <div className={"gameBox"}>
                <div className={"gameBoard"}>
                    <div className={"topColumn"}>
                        <div className={"position00"}>  <button onClick={ () => {this.onClick(0, 0)}}>test </button>{this.state.currentGameInputs[0][0]}</div>
                        <div className={"position01"}>  <button onClick={ () => {this.onClick(0, 1)}}>test </button>{this.state.currentGameInputs[0][1]}</div>
                        <div className={"position02"}>  <button onClick={ () => {this.onClick(0, 2)}}>test </button>{this.state.currentGameInputs[0][2]}</div>
                    </div>
                    <div className={"middleColumn"}>
                        <div className={"position10"}>  <button onClick={ () => {this.onClick(1, 0)}}>test </button>{this.state.currentGameInputs[1][0]}</div>
                        <div className={"position11"}>  <button onClick={ () => {this.onClick(1, 1)}}>test </button>{this.state.currentGameInputs[1][1]}</div>
                        <div className={"position12"}>  <button onClick={ () => {this.onClick(1, 2)}}>test </button>{this.state.currentGameInputs[1][2]}</div>
                    </div>
                    <div className={"bottomColumn"}>
                        <div className={"position20"}>  <button onClick={ () => {this.onClick(2, 0)}}>test </button>{this.state.currentGameInputs[2][0]}</div>
                        <div className={"position21"}>  <button onClick={ () => {this.onClick(2, 1)}}>test </button>{this.state.currentGameInputs[2][1]}</div>
                        <div className={"position22"}>  <button onClick={ () => {this.onClick(2, 2)}}>test </button>{this.state.currentGameInputs[2][2]}</div>
                    </div>
                    {`Current Turn ${this.state.currentTurn}`}
                </div>
            </div>
        </div>
    )
  }
}
;