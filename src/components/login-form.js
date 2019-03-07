import React from "react";
import { Field, reduxForm, focus } from "redux-form";
import { login } from "../actions/auth";
import { required, nonEmpty } from "../validators";
import "./css/login-form.css";



const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <input 
      {...input} 
      placeholder={placeholder} 
      type={type} 
      autoComplete="on"
    />
    {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
  </div>
);

export class LoginForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(login(values.username, values.password));
  }

  render() {
    let error;
    if (this.props.error) {
      error = (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      );
    }
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}
      >
        {error}
        <label htmlFor="username"></label>
        <Field
          component={renderField}
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          validate={[required, nonEmpty]}
        />
        <label htmlFor="password"></label>
        <Field
          component={renderField}
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          validate={[required, nonEmpty]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Log in
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: "login",
  onSubmitFail: (errors, dispatch) => dispatch(focus("login", "username"))
})(LoginForm);
