import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentTurn: "X",
        currentGameInputs: [
            [null, null, null],
            [null, null, null],
            [null, null, null]],
        console: ""
      };

      this.onClick = this.onClick.bind(this);
  }

  onClick(y, x) {
      const boardManipulator = Object.values(this.state.currentGameInputs);

      console.log(boardManipulator);
      console.log('onClick fires:', y, x);

      if (boardManipulator[y][x] !== null) {
          this.setState({
              console: "Invalid Move"
          });
          return
      }

      boardManipulator[y][x] = this.state.currentTurn;

      if (this.state.currentTurn === "X") {
          this.setState({
              currentTurn: "O",
              currentGameInputs: boardManipulator,
              console: ""
          })
      } else {
          this.setState({
              currentTurn: "X",
              currentGameInputs: boardManipulator,
              console: ""
          })
      }
  }

  render() {
    return (
        <div>
            <h2>Game</h2>
            <div className={"gameBox"}>
                <div className={"gameBoard"}>
                    <div className={"topColumn"}>
                        <div className={"position00"} onClick={ () => {this.onClick(0, 0)}}>{this.state.currentGameInputs[0][0]}</div>
                        <div className={"position01"} onClick={ () => {this.onClick(0, 1)}}>{this.state.currentGameInputs[0][1]}</div>
                        <div className={"position02"} onClick={ () => {this.onClick(0, 2)}}>{this.state.currentGameInputs[0][2]}</div>
                    </div>
                    <div className={"middleColumn"}>
                        <div className={"position10"} onClick={ () => {this.onClick(1, 0)}}>{this.state.currentGameInputs[1][0]}</div>
                        <div className={"position11"} onClick={ () => {this.onClick(1, 1)}}>{this.state.currentGameInputs[1][1]}</div>
                        <div className={"position12"} onClick={ () => {this.onClick(1, 2)}}>{this.state.currentGameInputs[1][2]}</div>
                    </div>
                    <div className={"bottomColumn"}>
                        <div className={"position20"} onClick={ () => {this.onClick(2, 0)}}>{this.state.currentGameInputs[2][0]}</div>
                        <div className={"position21"} onClick={ () => {this.onClick(2, 1)}}>{this.state.currentGameInputs[2][1]}</div>
                        <div className={"position22"} onClick={ () => {this.onClick(2, 2)}}>{this.state.currentGameInputs[2][2]}</div>
                    </div>
                    <div>
                        {`Current Turn ${this.state.currentTurn}`}
                    </div>
                    <div>
                        {this.state.console}
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
;