import React from 'react';

export default class Game extends React.Component {
  constructor(props) {
      super(props)
  }

  render() {
    return (
        <div>
            <h2>Game</h2>
            <div className={"gameBox"}>
                <div className={"gameBoard"}>
                    <div className={"topColumn"}>
                        <div className={"position00"}>Test 1</div>
                        <div className={"position01"}>Test 2</div>
                        <div className={"position02"}>Test 3</div>
                    </div>
                    <div className={"middleColumn"}>
                        <div className={"position10"}>Test 4</div>
                        <div className={"position11"}>Test 5</div>
                        <div className={"position12"}>Test 6</div>
                    </div>
                    <div className={"bottomColumn"}>
                        <div className={"position20"}>Test 4</div>
                        <div className={"position21"}>Test 5</div>
                        <div className={"position22"}>Test 6</div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
;