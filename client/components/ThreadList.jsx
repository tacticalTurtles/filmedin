import React from 'react';
import $ from 'jquery';
import helpers from '../lib/helpers';

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
      var {dateAmerican, dateWords, timeWithTimeZone } = helpers.timestampParser(thread.createdAt);

      return (
        <tr key={i} value={thread.topic}>
          <th className="thread" style={{'border': '.5px dotted black'}}><a href="#">{thread.topic}</a></th>
          <th style={{'border': '.5px dotted black'}}>{thread.username}
            <img src={thread.picture} />
          </th>
          <th style={{'border': '.5px dotted black'}}>{dateAmerican + ' @ ' + timeWithTimeZone}</th>
        </tr>
      )
    });

    return (
      <div className="container">
        <div className="thread-list">
          <button
            className="btn btn-primary btn-md"
            onClick={this.props.setShowCreateThreadView}
            style={{ 'float': 'right' }}
          >
            Create New Thread
          </button>
          <table className="table">
            <tbody>
              <tr>
                <th width="70%" style={{'border': '.5px solid black'}}><h4><strong>Topic Title</strong></h4></th>
                <th width="15%" style={{'border': '.5px solid black'}}><h4><strong>Author</strong></h4></th>
                <th width="15%" style={{'border': '.5px solid black'}}><h4><strong>Created At</strong></h4></th>
              </tr>
              { threads }
            </tbody>
          </table>
        </div>
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
