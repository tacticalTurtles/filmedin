import React from 'react';
import helpers from '../lib/helpers';

class Forum extends React.Component {
  constructor (props) {
    super(props);
  }

  handleCreateTopic() {

  }

  render() {
    const { topics } = this.props;
    console.log('topics === ', topics);
    const forum = topics.map((topic, i) => {
      console.log(topic)
      return (
        <tr key={i}>
          <th>{topic.topic}</th>
          <th>{topic.createdAt}</th>
          <th>{topic.updatedAt}</th>
        </tr>
      )
    })
    return (
      <div className="panel panel-default">
        <button onClick={this.props.handleCreateTopicClick} className="btn btn-primary btn-lg btn-success">Create Topic</button>
        <div className="panel-heading">Movie Forum</div>
        <div className="panel-body">
        </div>

        <table className="table">
          <tbody>
            <tr>
              <th>Topic Title</th>
              <th>Created At</th>
              <th>Last Post</th>
            </tr>
            { forum }
          </tbody>
        </table>
      </div>
    )
  }
}

Forum.propTypes = {
  username: React.PropTypes.string.isRequired,
  userID: React.PropTypes.number.isRequired,
  topics: React.PropTypes.array.isRequired,
  handleCreateTopicClick: React.PropTypes.func.isRequired
}

export default Forum;
