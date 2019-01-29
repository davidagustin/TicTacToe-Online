import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types'
import io from 'socket.io-client';

const socket = io();

export default class Lobby extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            chatRoomMessages: '',
        };
        this.getMessages = this.getMessages.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        socket.on('chat room', (message) => {
            console.log("message", message);
            this.getMessages()
        });
        this.getMessages()
    }

    getMessages() {
        console.log('current messages', this.state.chatRoomMessages);
        axios.get('/mvp')
            .then((messages) => {
                const messageList = messages.data.map((message, i) => {
                    return (
                        <li key={i}>
                            {message.text}
                        </li>
                    )
                });

                this.setState({
                    chatRoomMessages: messageList,
                    text: ""
                });
            })
    };

    handleSubmit(e) {
        e.preventDefault();
        socket.emit('chat room', {text: this.state.text});
        axios.post('/mvp', {body: this.state.text, userName: this.props.userName});
        this.getMessages()
    }

    handleChange(e) {
        let newText = {};
        newText[e.target.name] = e.target.value;
        this.setState(newText)
    }

    render() {
        return (
            <div className={"lobbyInputBox"}>
                <h2>Lobby</h2>
                <div className={"lobbyChatRoom"}>
                    <div>
                        <ul classname={"lobbyChatMessages"}>
                            {this.state.chatRoomMessages}
                        </ul>
                    </div>
                </div>
                <h2>Send Message</h2>
                <div className={"inputBox"}>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            <input type='input' value={this.state.text} name='text' onChange={this.handleChange} className={'inputBarLobby'} size="120"/>
                        </label>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}


Lobby.defaultProps = {
    text: '',
    chatRoomMessages: ''
};

Lobby.propTypes = {
    text: propTypes.string,
    chatRoomMessages: propTypes.string
};
