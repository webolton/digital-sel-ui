/* eslint no-unused-vars: 0 */

import React from 'react';
import { connect } from 'react-redux';
import userActions from 'actions/userActions';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import asyncValidate from 'components/helpers/asyncValidate';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';
import CustomInput from 'components/CustomInput/CustomInput';
import showUserPageStyle from 'assets/javascripts/views/users/showUserPageStyle';
import Progress from 'components/Progress';

const validate = (values) => {
  const errors = {};
  const requiredFields = [
    'first_name',
    'last_name',
    'email',
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
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {

  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

class ShowUserPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        first_name: '',
        last_name: '',
        email: '',
      },
    };

    this.submitUpdate = this.submitUpdate.bind(this);
  }

  componentDidMount() {
    const {
      match: {
        params: {
          userId,
        },
      },
      getUser,
    } = this.props;
    getUser(userId);
  }

  submitUpdate = values => {
    const {
      match: {
        params: {
          userId,
        },
      },
      updateUser,
    } = this.props;
    const userData = { user: values };
    updateUser(userId, userData);
  }

  render() {
    const {
      user: {
        fetching,
        fetched,
      },
      classes,
      error,
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    if (fetching) {
      return <Progress message="Loading" />;
    }

    if (fetched) {
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
                    <form className={classes.form} onSubmit={handleSubmit(val => this.submitUpdate(val))}>
                      <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>User Profile</h4>
                      </CardHeader>
                      <CardBody>
                        <Field
                          name="first_name"
                          label="First Name"
                          id="firstName"
                          component={renderTextField}
                          className="testClass"
                        />
                        <Field
                          name="last_name"
                          label="Last Name"
                          id="lastName"
                          component={renderTextField}
                        />
                        <Field
                          name="email"
                          label="Email"
                          id="email"
                          component={renderTextField}
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
                          update profile
                        </Button>
                      </CardFooter>
                      <CardFooter className={classes.cardFooter}>
                        <Button simple color="danger" size="lg" type="submit">
                          change password
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
}

ShowUserPage.defaultProps = {
  match: {
    id: null,
  },
  user: null,
  rest: {},
  dispatch: {},
  alert: {},
  getUser: null,
};

ShowUserPage.propTypes = {
  match: {
    id: PropTypes.number.isRequired,
  },
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  getUser: PropTypes.func,
  rest: PropTypes.object,
  dispatch: PropTypes.func,
  alert: PropTypes.object,
  user: PropTypes.object,
};

ShowUserPage = reduxForm({
  form: 'ShowUserPage',
  validate,
  enableReinitialize: true,
})(ShowUserPage)

ShowUserPage = connect(
  state => ({
    initialValues: state.user.user.user,
    user: state.user,
    currentUser: state.authentication,
  }),
  {
    getUser: userActions.fetchUser,
    updateUser: userActions.updateUser,
  }
)(ShowUserPage)

export default withStyles(showUserPageStyle)(ShowUserPage);
