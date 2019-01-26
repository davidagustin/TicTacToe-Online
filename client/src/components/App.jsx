import React from 'react';
import axios from 'axios';
import propTypes from 'prop-types'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      chatRoomMessages: '',
    };  
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit fires with', this.state.text);

    axios.post('/mvp', this.state.text)
  }

  handleChange(e) {
    let newText = {};
    newText[e.target.name] = e.target.value;
    this.setState(newText)
  }

  render() {
    return (
      <div>
        {this.state.chatRoomMessages}
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

App.defaultProps = {
  text: '',
  chatRoomMessages: ''
};

App.propTypes = {
  text: propTypes.string,
  chatRoomMessages: propTypes.string
};
