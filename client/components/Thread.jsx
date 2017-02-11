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
    var messages = this.state.threadMessages.map((message, i) => {
      var {dateAmerican, dateWords, timeWithTimeZone } = helpers.timestampParser(message.createdAt);
      return (
        <tr>
          <th>{message.username}: {message.message}</th>
          <th>{dateAmerican + ' @ ' + timeWithTimeZone}</th>
        </tr>
      )
    })

    return (
      <div>
        <button
          onClick={this.props.setShowThreadListView}
          className="btn btn-default btn-sm"
        >
          Back to List
        </button>

        <table className="table">
          <tbody>
          <tr>
            <th className="col-md-8">Message</th>
            <th>Created At</th>
          </tr>
          {messages}
          </tbody>
        </table>
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
        // {this.state.threadMessages.map((message, i) => {
        //   var {dateAmerican, dateWords, timeWithTimeZone } = helpers.timestampParser(message.createdAt);
        //   return (
        //     <div
        //       key={i}
        //       className="thread-post col-md-8 offset-md-2"
        //     >
        //       <div className="thread-post-user-info col-md-2 offset-md-2">
        //         {message.username}
        //       </div>
        //       <div className="thread-post-message col-md-6 offset-md-4">
        //         <blockquote>{message.message}</blockquote>
        //       </div>
        //       <div className="thread-post-message-details col-md-6 offset-md-4">
        //         {dateAmerican + ' @ ' + timeWithTimeZone}
        //       </div>
        //     </div>
        //   )
        // })}
