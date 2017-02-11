import React from 'react';
import CreateThreadForm from './CreateThreadForm';

class CreateThread extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button
          className="btn btn-default btn-sm"
          onClick={this.props.setShowThreadListView}
        >
          Back to List
        </button>
        <CreateThreadForm
          getTopics={this.props.getTopics}
          userID={this.props.userID}
          getCurrentThread={this.props.getCurrentThread}
        />
      </div>
    )
  }
}

CreateThread.propTypes = {
  userID: React.PropTypes.number.isRequired,
  getTopics: React.PropTypes.func.isRequired,
  setShowThreadListView: React.PropTypes.func.isRequired
}

export default CreateThread;
