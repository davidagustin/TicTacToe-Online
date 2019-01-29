import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentPlayer: "X",
        previousPlayer: "O",
        currentGameInputs: [
            [null, null, null],
            [null, null, null],
            [null, null, null]],
        console: ""
      };

      this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
      console.log('componentDidMount fires!')
  }

    onClick(y, x) {
      const boardManipulator = Object.values(this.state.currentGameInputs);

        if (this.state.console.includes('Neither')) {
            this.setState({
                console: 'Neither X or O Wins. Game has ended. Please Reset'
            });
            return
        }

      if (this.state.console.includes('Wins')) {
          this.setState({
              console: `${this.state.previousPlayer} Wins! Game has ended. Please Reset`
          });
          return
      }

      if (boardManipulator[y][x] !== null) {
          this.setState({
              console: "Invalid Move"
          });
          return
      }
      boardManipulator[y][x] = this.state.currentPlayer;

      if (this.state.currentPlayer === "X") {
          this.setState({
              currentPlayer: "O",
              previousPlayer: "X",
              currentGameInputs: boardManipulator,
              console: ""
          });
          this.gameCompletionCheck()
      } else {
          this.setState({
              currentPlayer: "X",
              previousPlayer: "O",
              currentGameInputs: boardManipulator,
              console: ""
          });
          this.gameCompletionCheck()
      }
  }

  gameCompletionCheck() {
      const currentBoard = Object.values(this.state.currentGameInputs);
      console.log('current player:', this.state.currentPlayer);
      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j ++) {
              console.log(JSON.stringify(currentBoard[i]));
              console.log(JSON.stringify(currentBoard[j][i]));
              console.log(currentBoard[i].every((player) => player === this.state.currentPlayer));
              if (currentBoard[i].every((player) => player === this.state.currentPlayer)) {
                  this.setState({
                      console: `${this.state.currentPlayer} Wins!`
                  });
              }
          }
      }
      let transposedBoard = [];
      for (let i = 0; i < currentBoard.length; ++i) {
          for (let j = 0; j < currentBoard[i].length; ++j) {
              // skip undefined values to preserve sparse array
              if (currentBoard[i][j] === undefined) continue;
              // create row if it doesn't exist yet
              if (transposedBoard[j] === undefined) transposedBoard[j] = [];
              // swap the x and y coords for the copy
              transposedBoard[j][i] = currentBoard[i][j];
          }
      }

      for (let i = 0; i < 3; i++) {
          for (let j = 0; j < 3; j ++) {
              console.log(JSON.stringify(transposedBoard[i]));
              console.log(JSON.stringify(transposedBoard[j][i]));
              console.log(transposedBoard[i].every((player) => player === this.state.currentPlayer));
              if (transposedBoard[i].every((player) => player === this.state.currentPlayer)) {
                  this.setState({
                      console: `${this.state.currentPlayer} Wins!`
                  });
              }
          }
      }

      if ([currentBoard[0][0], currentBoard[1][1], currentBoard[2][2]].every((player) => player === this.state.currentPlayer)) {
          this.setState({
              console: `${this.state.currentPlayer} Wins!`
          });
      }

      if ([currentBoard[0][2], currentBoard[1][1], currentBoard[2][0]].every((player) => player === this.state.currentPlayer)) {
          this.setState({
              console: `${this.state.currentPlayer} Wins!`
          });
      }

      if (currentBoard.every((input) => (input.indexOf(null) === -1)))  {
          this.setState({
              console: `Neither X or O Wins.`
          });
      }
  }

  resetGame() {
    this.setState({
        currentGameInputs: [
            [null, null, null],
            [null, null, null],
            [null, null, null]],
        console: "",
        currentPlayer: "X",
        previousPlayer: "O",
    })
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
                        {`Current Turn: ${this.state.currentPlayer}`}
                    </div>
                    <div>
                        {this.state.console}
                    </div>
                    <div>
                        {this.state.console.includes("Wins") ?
                            <div  onClick={ () => {this.resetGame()}}><button>Reset Game</button></div>
                            : <div/>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
;