import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      characters: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
      characters: this.props.maxChars - event.target.value.length
    })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
        <p>{this.state.characters}</p>
      </div>
    );
  }
}

export default TwitterMessage;
