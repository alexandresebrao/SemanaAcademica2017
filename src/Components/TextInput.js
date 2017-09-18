import React, {Component} from 'react';
import { FormControl } from 'react-bootstrap';

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    var value = evt.target.value;

    if (value === "") {
      value = null;
    }
    this.props.onChange(value)
  }

  render() {
    var props = this.props;

    return (
      <div>
        {props.label ? (<label>{props.label}</label>) : null}
        <FormControl
          type="text"
          value={this.props.value || ""}
          onChange={this.handleChange}>
        </FormControl>
      </div>

    )
  }
}

export default TextInput;
