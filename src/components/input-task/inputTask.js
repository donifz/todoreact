import React from "react";

class InputTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };

    this.inputTake = this.inputTake.bind(this);
  }

  inputTake(e) {
    this.setState({ text: e.target.value });
  }

  render() {
    return (
      <div className="input-form">
        <input
          className="task-input"
          placeholder="Ваша задача"
          required
          type="text"
          onChange={this.inputTake}
        ></input>
        <input
          className="btn submit-btn"
          type="submit"
          value="Добавить"
          onClick={() => this.props.onAdd(this.state.text)}
        ></input>
      </div>
    );
  }
}
export default InputTask;
