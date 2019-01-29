import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types'
import io from 'socket.io-client';
const socket = io();

export default class GameChatRoom extends React.Component {
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
            this.getMessages()
        });
        this.getMessages()
    }

    getMessages() {
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
        axios.post('/mvp', {body: this.state.text, userName:this.props.userName});
        this.getMessages()
    }

    handleChange(e) {
        let newText = {};
        newText[e.target.name] = e.target.value;
        this.setState(newText)
    }

    render() {
        return (
            <div className={"chatRoomAndInputBox"}>
                <h2>Game Chat</h2>
                <div className={"chatRoom"}>
                    <div>
                        <ul>
                            {this.state.chatRoomMessages}
                        </ul>
                    </div>
                </div>
                <h2>Send Message</h2>
                <div className={"inputBox"}>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type='input' value={this.state.text} name='text' onChange={this.handleChange}/>
                    </label>
                    <button>Submit</button>
                </form>
                </div>
            </div>
        )
    }
}

GameChatRoom.defaultProps = {
    text: '',
    chatRoomMessages: ''
};

GameChatRoom.propTypes = {
    text: propTypes.string,
    chatRoomMessages: propTypes.string
};
