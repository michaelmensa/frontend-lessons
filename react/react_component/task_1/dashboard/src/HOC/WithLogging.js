import React, { Component } from 'react';

function withLogging(WrappedComponent) {
  return class extends Component {
    componentDidMount() {
      console.log(`Component ${this.getDisplayName(WrappedComponent)} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${this.getDisplayName(WrappedComponent)} is going to unmount`);
    }

    getDisplayName(WrappedComponent) {
      return WrappedComponent.displayName || WrappedComponent.name || 'Component';
    }

    render() {
      return <WrappedComponent {...this.props} />
    }
  }
}

export default withLogging;