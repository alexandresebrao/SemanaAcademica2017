import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Icon extends Component {
  render() {
    var props = this.props;

    if (props.icon) {
      return (
        <span className={"glyphicon glyphicon-"+props.icon} aria-hidden="true" />
      )
    }
    return null;
  }
}

Icon.propTypes = {
  icon: PropTypes.string
}

export default Icon;
