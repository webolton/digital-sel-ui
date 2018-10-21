import React from 'react';
import { connect } from 'react-redux';

class HomePage extends React.Component {

  render() {
    return (
      <div className="col-md-12 col-md-offset-3">
        <h1>Welcome to the Digital South English Legendary</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { currentUser } = authentication;
  return {
    currentUser
  };
}

export default connect(mapStateToProps)(HomePage);
