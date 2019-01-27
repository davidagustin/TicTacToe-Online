import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        currentGameInputs: [
            [null, null, null],
            [null, null, null],
            [null, null, null]]
      };
  }

  render() {
    return (
        <div>
            <h2>Game</h2>
            <div className={"gameBox"}>
                <div className={"gameBoard"}>
                    <div className={"topColumn"}>
                        <div className={"position00"} />
                        <div className={"position01"} />
                        <div className={"position02"} />
                    </div>
                    <div className={"middleColumn"}>
                        <div className={"position10"} />
                        <div className={"position11"} />
                        <div className={"position12"} />
                    </div>
                    <div className={"bottomColumn"}>
                        <div className={"position20"} />
                        <div className={"position21"} />
                        <div className={"position22"} />
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
;