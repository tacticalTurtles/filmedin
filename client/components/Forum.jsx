import React from 'react';
import helpers from '../lib/helpers';
import $ from 'jquery';

class Forum extends React.Component {
  constructor (props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.onClick();
  }

  componentDidUpdate() {
    this.onClick();
  }

  onClick() {
    var context = this;
    $('.topic').on('click', function(e) {
      var topicTitle = $(this).text();
      helpers.getMessagesByTopicTitle(topicTitle)
        .then(resp => {
          console.log('resp.data === ', resp.data);
          context.props.handleTopicClick(resp.data);
        })
        .catch(err => {
          console.log('ERROR: ', err);
        });
    });
  }

  render() {
    const { topics } = this.props;
    const threads = topics.map((topic, i) => {
      return (
        <tr key={i} value={topic.topic}>
          <th className="topic">{topic.topic}</th>
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
            { threads }
          </tbody>
        </table>
      </div>
    )
  }
}

Forum.propTypes = {
  topics: React.PropTypes.array.isRequired,
  handleCreateTopicClick: React.PropTypes.func.isRequired
}

export default Forum;
