import React from 'react';
import TextFieldGroup from './common/TextFieldGroup';

class CreateTopic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleCreateTopicSubmit, update } = this.props
    return (
      <div>
        <TextFieldGroup
          userID={this.props.userID}
          handleCreateTopicSubmit={handleCreateTopicSubmit}
          update={update}
        />
      </div>
    )
  }
}

CreateTopic.propTypes = {
  userID: React.PropTypes.number.isRequired
}

export default CreateTopic;
