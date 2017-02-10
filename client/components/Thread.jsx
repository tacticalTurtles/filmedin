import React from 'react';
import ReplyFieldGroup from './common/ReplyFieldGroup';

class Thread extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        {this.props.messages.map((message, i) => {
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
          handleSubmitReply= {this.props.handleSubmitReply}
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
