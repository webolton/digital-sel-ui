import Transition from 'react-transition-group/Transition';
import React, { Component } from 'react';

const duration = 200;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 },
};

const withTransition = ChildComponent => class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inProp: false,
    };
  }

  componentDidMount() {
    this.setState({ inProp: true });
  }

  render() {
    const { inProp } = this.state;
    return (
      <Transition in={inProp} timeout={duration} unmountOnExit>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state],
          }}
          >
            <ChildComponent />
          </div>
        )}
      </Transition>
    );
  }
};

export default withTransition;
