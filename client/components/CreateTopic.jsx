import React from 'react';
import TextFieldGroup from './common/TextFieldGroup';

class CreateTopic extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <TextFieldGroup
          userID={this.props.userID}
        />
      </div>
    )
  }
}

CreateTopic.propTypes = {
  userID: React.PropTypes.number.isRequired
}

export default CreateTopic;
