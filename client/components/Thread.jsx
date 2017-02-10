import React from 'react';
import ReplyFieldGroup from './common/ReplyFieldGroup';
import helpers from '../lib/helpers'

class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: this.props.messages
    }
    this.updateThreadMessages = this.updateThreadMessages.bind(this);
  }

  updateThreadMessages() {
    helpers.getMessagesByTopicId(this.props.messages[0].topicID)
      .then(resp => {
        console.log('handleThreadReply resp', resp);
        this.setState({
          messages: resp.data
        })
      })
      .then(() => {
        this.forceUpdate();
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }
 
  render() {
    return (
      <div>
        {this.state.messages.map((message, i) => {
          return (
            <div
              key={i}
              className="thread-post"
            >
              <div className="thread-post-user-info">
                <b>{message.username}</b>
              </div>
              <div className="thread-post-message">
                <blockquote>{message.message}</blockquote>
              </div>
              <div className="thread-post-message-details">
                {message.createdAt}
              </div>
            </div>
          )
        })}
        <ReplyFieldGroup
          topicID={this.props.messages[0].topicID}
          userID={this.props.userID}
          handleSubmitReply={this.props.handleSubmitReply}
          updateThreadMessages={this.updateThreadMessages}
        />
      </div>
    )
  }
}

Thread.propTypes = {
  messages: React.PropTypes.array.isRequired,
  userID: React.PropTypes.number.isRequired,
  handleSubmitReply: React.PropTypes.func.isRequired
}

export default Thread;
