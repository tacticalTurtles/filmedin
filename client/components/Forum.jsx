import React from 'react';

class Forum extends React.Component {
  render() {
    return (
      <div>{this.props.username}</div>
    )
  }
}

Forum.propTypes = {
  username: React.PropTypes.string.isRequired
}

export default Forum;