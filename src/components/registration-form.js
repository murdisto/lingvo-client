import React from 'react';
// eslint-disable-next-line no-unused-vars
import {Field, reduxForm, focus} from 'redux-form';
import {registerUser} from '../actions/users';
import {login} from '../actions/auth';

import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
const passwordLength = length({min: 10, max: 72});
const matchesPassword = matches('password');

const renderField = ({
  input,
  label,
  type,
  placeholder,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <input {...input} placeholder={placeholder} type={type} autoComplete="off" />
    {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
  </div>
);

export class RegistrationForm extends React.Component {
  onSubmit(values) {
    const {username, password, firstName, lastName} = values;
    const user = {username, password, firstName, lastName};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values =>
          this.onSubmit(values)
        )}>
        <label htmlFor="firstName"></label>
        <Field 
          component={renderField} 
          type="text" 
          name="firstName"
          placeholder="Name"
          validate={[required, isTrimmed]}
          autoComplete="off"
        />
        <label htmlFor="username"></label>
        <Field
          component={renderField}
          type="text"
          name="username"
          placeholder="Username"
          validate={[required, nonEmpty, isTrimmed]}
          autoComplete="off"
        />
        <label htmlFor="password"></label>
        <Field
          component={renderField}
          type="password"
          name="password"
          placeholder="Password"
          validate={[required, passwordLength, isTrimmed]}
          autoComplete="off"
        />
        <label htmlFor="passwordConfirm"></label>
        <Field
          component={renderField}
          type="password"
          name="passwordConfirm"
          placeholder="Confirm Password"
          validate={[required, nonEmpty, matchesPassword]}
          autoComplete="off"
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
                    Register
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'registration',
  onSubmitFail: (errors, dispatch) =>
    dispatch(focus('registration', Object.keys(errors)[0]))
})(RegistrationForm);
