import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Icon from "./Icon.js"

class ButtonFramework extends Component {
  render() {
    var props = this.props;

    return (
      <Button
      bsStyle={props.color}
      onClick={this.props.onClick}>
        <Icon icon={props.icon} />{props.text}
      </Button>
    );
  }
}

ButtonFramework.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string
}

ButtonFramework.defaultProps = {
  color: "primary"
}
export default ButtonFramework;
