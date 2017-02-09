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
            <div className="thread-post">
              <div className="thread-post-user-info">
                {message.username}
              </div>
              <div className="thread-post-message">
                {message.message}
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
        />
      </div>
    )
  }
}

Thread.propTypes = {
  messages: React.PropTypes.array.isRequired,
  userID: React.PropTypes.number.isRequired
}

export default Thread;
