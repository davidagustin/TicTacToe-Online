import React from 'react';
import GameChatRoom from './GameChatRoom.jsx';
import Game from './Game.jsx';
import Lobby from './Lobby.jsx'


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        view: 'lobby',
        userName: ""
    };
    this.changeView = this.changeView.bind(this);
  }

  componentDidMount() {
      this.inputUserName()
  }

    changeView(option) {
    if (option === 'lobby') {
        this.setState ({
            view: 'game'
        });
    } else {
        this.setState({
            view: 'lobby'
        })
    }
  }

    inputUserName() {
        if (this.state.userName.length === 0) {
            let  newName = prompt("Please enter your name:");
            this.setState({
                userName: newName
            })
        }
    }

  render() {
    return (
        <div>
            <div>
                <div className="nav">
                    <span className={this.state.view === 'lobby'
                        ? 'nav-selected'
                        : 'nav-unselected'}
                          onClick={() => this.changeView('game')}>
                        <button>Go To Lobby</button>
                        </span>
                    <span className={this.state.view === 'game'
                        ? 'nav-selected'
                        : 'nav-unselected'}
                          onClick={() => this.changeView('lobby')}>
                        <button>Go To Game</button>
                    </span>
                </div>
            </div>
            <div className={"headerBox"}>
                <h1>WELCOME TO TIC-TAC-TOE</h1>
            </div>
                {`Currently logged in as: ${this.state.userName}`}
            <div>
                <div className="app">
                    {this.state.view === 'game'
                        ?
                        <div className={"app"}>
                            <Game name={this.state.userName}/>
                            <GameChatRoom />
                        </div>
                        :
                        <div>
                            <Lobby />
                        </div>
                    }
                </div>
            </div>
        </div>
    )
  }
}