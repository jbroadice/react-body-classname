'use strict';

var React = require('react'),
  uniq = require('lodash/uniq'),
  withSideEffect = require('react-side-effect');

function reducePropsToState(propsList) {
  return uniq(propsList.map(function(props) {
    return props.className;
  })).join(' ');
}

function handleStateChangeOnClient(stringClassNames) {
  document.body.className = stringClassNames || '';
}

var DocumentTitle = React.createClass({
  propTypes: {
    className: React.PropTypes.string.isRequired
  },

  render: function render() {
    if (this.props.children) {
      return React.Children.only(this.props.children);
    } else {
      return null;
    }
  }
});

module.exports = withSideEffect(
  reducePropsToState,
  handleStateChangeOnClient
)(DocumentTitle);
