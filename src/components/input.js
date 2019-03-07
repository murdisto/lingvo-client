import React from "react";

export default class Input extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.meta.active && this.props.meta.active) {
      this.input.focus();
    }
  }

  render() {
    
    const { name } = this.props.input;
    let error;
    if (this.props.meta.touched && this.props.meta.error) {
      error = <div className="form-error">{this.props.meta.error}</div>;
    }

    let warning;
    if (this.props.meta.touched && this.props.meta.warning) {
      warning = <div className="form-warning">{this.props.meta.warning}</div>;
    }


    return (
      
      
      <div className="form-input">
        <label htmlFor={name} title="answer">
          {this.props.label}
          {error}
          {warning}
        </label>
        <input
          {...this.props.input}
          id={name}
          type={this.props.type}
          ref={input => (this.input = input)}
          placeholder="Answer"
          autoComplete="off"
        />
      </div>
    );
  }
}
