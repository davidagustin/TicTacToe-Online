import React from 'react';
import ChatRoom from './ChatRoom.jsx'

export default class App extends React.Component {

  render() {
    return (
        <div>
            <div className={"headerBox"}>
                <h1>WELCOME TO TIC-TAC-TOE</h1>
            </div>
            <ChatRoom />
        </div>
    )
  }
}