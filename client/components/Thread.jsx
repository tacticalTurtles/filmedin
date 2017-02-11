import React from 'react';
import ThreadReplyForm from './ThreadReplyForm';
import helpers from '../lib/helpers';

class Thread extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      threadMessages: this.props.threadMessages,
      currentTopicID: this.props.currentTopicID
    }
    this.getMessages = this.getMessages.bind(this);
  }

  componentDidMount() {
    this.getMessages();
  }

  getMessages() {
    helpers.getMessagesByTopicID(this.state.currentTopicID)
      .then(resp => {
        var data = resp.data;
        return data;
      })
      .then(data => {
        this.setState({
          threadMessages: data
        });
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }

  render() {
    console.log('thread state', this.state.currentTopicID)
    return (
      <div>
        <button
          onClick={this.props.setShowThreadListView}
          className="btn btn-default btn-sm"
        >
          Back to List
        </button>
        {this.state.threadMessages.map((message, i) => {
          var {dateAmerican, dateWords, timeWithTimeZone } = helpers.timestampParser(message.createdAt);
          return (
            <div
              key={i}
              className="thread-post"
            >
              <div className="thread-post-user-info">
                {message.username}
              </div>
              <div className="thread-post-message">
                <blockquote>{message.message}</blockquote>
              </div>
              <div className="thread-post-message-details">
                {dateAmerican + ' @ ' + timeWithTimeZone}
              </div>
            </div>
          )
        })}
        <ThreadReplyForm
          topicID={this.props.threadMessages[0].topicID}
          userID={this.props.userID}
          getMessages={this.getMessages}
          setShowThreadView={this.props.setShowThreadView}
        />
      </div>
    )
  }
}

Thread.propTypes = {
  userID: React.PropTypes.number.isRequired,
  currentTopicID: React.PropTypes.number.isRequired,
  threadMessages: React.PropTypes.array.isRequired,
  setShowThreadListView: React.PropTypes.func.isRequired
}

export default Thread;
