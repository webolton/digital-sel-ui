import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import userActions from 'actions/userActions';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Field, reduxForm } from 'redux-form';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';
import TextField from '@material-ui/core/TextField';
import loginPageStyle from 'assets/javascripts/views/users/loginPageStyle';

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'email',
    'password',
  ];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });
  if (
    values.email
    && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }
  return errors;
};

const renderTextField = ({
  label,
  input,
  propClasses,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    InputProps={{
      classes: {
        root: propClasses.input,
        underline: propClasses.underline,
        error: propClasses.underlineError,
        disabled: propClasses.disabled,
      },
    }}
    InputLabelProps={{
      classes: {
        root: propClasses.labelRoot,
        error: propClasses.labelRootError,
      },
    }}
    FormHelperTextProps={{
      classes: {
        error: propClasses.customHelperTextError,
        success: propClasses.helperTextSuccess,
      },
    }}
    {...input}
    {...custom}
  />
);

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.submitLogin = this.submitLogin.bind(this);
  }

  submitLogin = (values) => {
    const { loginUser } = this.props;
    loginUser(values.email, values.password);
  }

  render() {
    const {
      classes,
      alert,
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    return (
      <div>
        <div
          className={classes.pageHeader}
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card>
                  <form
                    className={classes.form}
                    onSubmit={handleSubmit(val => this.submitLogin(val))}
                  >
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                    </CardHeader>
                    <CardBody>
                      {alert.message
                        && <p className={classes.unauthorized}>Incorrect email or password.</p>
                      }
                      <Field
                        name="email"
                        label="Email"
                        id="email"
                        component={renderTextField}
                        fullWidth
                        propClasses={classes}
                        classes={{
                          root: classes.formControl,
                        }}
                      />
                      <Field
                        name="password"
                        label="Password"
                        id="password"
                        type="password"
                        component={renderTextField}
                        fullWidth
                        propClasses={classes}
                        classes={{
                          root: classes.formControl,
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button
                        simple
                        color="success"
                        size="lg"
                        type="submit"
                        disabled={pristine || submitting}
                      >
                        submit
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.defaultProps = {
  alert: {},
  pristine: false,
  submitting: false,
};

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool,
  alert: PropTypes.object,
};

export default compose(
  connect(
    state => ({ // eslint-disable-line no-unused-vars
    }),
    {
      loginUser: userActions.login,
    },
  ),
  reduxForm({
    form: 'LoginPage',
    validate,
    enableReinitialize: true,
  }),
  withStyles(loginPageStyle),
)(LoginPage);
