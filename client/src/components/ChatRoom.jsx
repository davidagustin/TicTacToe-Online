import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types'

export default class ChatRoom extends React.Component {
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
        console.log('componentDidMount fires!');
        this.getMessages()
    }

    getMessages() {
        console.log('current messages', this.state.chatRoomMessages);
        axios.get('/mvp')
            .then((messages) => {
                console.log(messages);
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
        console.log('handleSubmit fires with', this.state.text);

        axios.post('/mvp', {body: this.state.text});
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
                <h2>Global Chat</h2>
                <div className={"chatRoom"}>
                    <div>
                        <ol>
                            {this.state.chatRoomMessages}
                        </ol>
                    </div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Input Text:
                        <input type='input' value={this.state.text} name='text' onChange={this.handleChange}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

ChatRoom.defaultProps = {
    text: '',
    chatRoomMessages: ''
};

ChatRoom.propTypes = {
    text: propTypes.string,
    chatRoomMessages: propTypes.string
};
