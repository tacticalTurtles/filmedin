import React from 'react';
import $ from 'jquery';

class ThreadList extends React.Component {
  constructor(props) {
    super(props);
    this.onTopicSelect = this.onTopicSelect.bind(this);
  }

  componentDidMount() {
    this.onTopicSelect();
  }

  componentDidUpdate() {
    this.onTopicSelect();
  }

  onTopicSelect() {
    var context = this;
    $('.thread').on('click', function(e) {
      var title = $(this).text();
      context.props.handleThreadEntryClick(title);
    });
  }

  render() {
    const { threadTopics } = this.props;
    var threads = threadTopics.map((thread, i) => {
      return (
        <tr key={i} value={thread.topic}>
          <th className="thread">{thread.topic}</th>
          <th>{thread.createdAt}</th>
          <th>{thread.updatedAt}</th>
        </tr>
      )
    });

    return (
      <div className="thread-list">
        <button
          className="btn btn-primary btn-lg btn-success"
          onClick={this.props.setShowCreateThreadView}
        >
          Create New Thread
        </button>
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

ThreadList.propTypes = {
  threadTopics: React.PropTypes.array.isRequired,
  handleThreadEntryClick: React.PropTypes.func.isRequired,
  setShowCreateThreadView: React.PropTypes.func.isRequired
}


export default ThreadList;
