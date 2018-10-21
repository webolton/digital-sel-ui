import React from 'react'
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom'
import Routes from '../Routes/Routes'
import { Navigation } from '../Navigation'

class App extends React.Component {

  render() {
    const { currentUser } = this.props;
    return(
      <div className='container'>
        <Navigation />
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </header>

        <main>
          <Routes currentUser={ currentUser } />
        </main>
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
