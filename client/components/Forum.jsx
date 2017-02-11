import React from 'react';
import helpers from '../lib/helpers';
import ThreadList from './ThreadList';
import Thread from './Thread';
import CreateThread from './CreateThread';

class Forum extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      view: 'showThreadListView',
      topics: this.props.topics,
      threadMessages: [],
      currentTopicID: 0
    }
    this.getTopics = this.getTopics.bind(this);
    this.handleThreadEntryClick = this.handleThreadEntryClick.bind(this);
    this.setShowThreadListView = this.setShowThreadListView.bind(this);
    this.setShowThreadView = this.setShowThreadView.bind(this);
    this.setShowCreateThreadView = this.setShowCreateThreadView.bind(this);
    this.getCurrentThread = this.getCurrentThread.bind(this);
  }

  componentWillMount() {
    this.getTopics();
  }

  getTopics() {
    helpers.getTopics()
      .then(resp => {
        this.setState({
          topics: resp.data,
        });
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  }

  getCurrentThread(topicID) {
    helpers.getMessagesByTopicID(topicID)
      .then(resp => {
        console.log('getCurrentThread', resp);
        this.setState({ threadMessages: resp.data, currentTopicID: topicID, view: 'showThreadListView' })
      })
      .then(() => {
        this.setState({ view: 'showThreadView' }, this.forceUpdate)
      })
      .catch(err => {
        console.log('Error: ', err);
      })
  }

  handleThreadEntryClick(title) {
    helpers.getMessagesByTitle(title)
      .then(resp => {
        this.setState({
          threadMessages: resp.data,
          currentTopicID: resp.data[0].topicID
        }, this.setShowThreadView);
      })
      .catch(err => {
        console.log('ERROR: ', err);
      });
  }

  setShowThreadListView() {
    this.setState({
      view: 'showThreadListView'
    });
  }

  setShowThreadView() {
    this.setState({
      view: 'showThreadView'
    });
  }

  setShowCreateThreadView() {
    this.setState({
      view: 'showCreateThreadView'
    });
  }

  render() {
    if (this.state.view === 'showThreadListView') {
      return (
        <ThreadList
          threadTopics={this.state.topics}
          handleThreadEntryClick={this.handleThreadEntryClick}
          setShowCreateThreadView={this.setShowCreateThreadView}
        />
      );
    } else if (this.state.view === 'showThreadView') {
      return (
        <Thread
          userID={this.props.userID}
          currentTopicID={this.state.currentTopicID}
          threadMessages={this.state.threadMessages}
          setShowThreadListView={this.setShowThreadListView}
          setShowThreadView={this.setShowThreadView}

        />
      );
    } else if (this.state.view === 'showCreateThreadView') {
      return (
        <CreateThread
          userID={this.props.userID}
          getTopics={this.getTopics}
          setShowThreadListView={this.setShowThreadListView}
          getCurrentThread={this.getCurrentThread}
        />
      )
    }
  }
}

Forum.propTypes = {
  topics: React.PropTypes.array.isRequired,
  userID: React.PropTypes.number.isRequired
}

export default Forum;
