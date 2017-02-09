import React from 'react';
import helpers from '../lib/helpers';

class TextFieldGroup extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      topicName: '',
      topicMessage: ''
    };

    this.onChange = this.onChange.bind(this);
  }


  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  // postNewTopic() {
  //   helpers.postTopic()
  // }

  render() {
    return (
      <div className='form-group'>
        <label className='control-label'>Topic Name</label>
        <input
          onChange={this.onChange}
          value={this.state.topicName}
          type='text'
          name='topicName'
          className='form-control'
        />
        <label className='control-label'>Topic Message</label>
          <input
            onChange={this.onChange}
            value={this.state.topicMessage}
            type='text'
            name='topicMessage'
            className='form-control'
        />
      <button className="btn btn-primary btn-lg btn-success">Submit</button>
      </div>
    );
  }
}


export default TextFieldGroup;
