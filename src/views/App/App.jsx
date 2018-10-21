import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import { Routes } from '../../routes'
import { Navigation } from '../../components/Navigation_'

class App extends React.Component {

  render() {
    const { currentUser } = this.props;
    return(
      <div>
        <Navigation />
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>

        <main>
          <div className="">
          </div>
        </main>
        <Routes currentUser={ currentUser } />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { authentication } = state;
  const { currentUser } = authentication;
  return {
    currentUser
  };
}

const connectedApp = withRouter(connect(mapStateToProps)(App));
export { connectedApp as App };
