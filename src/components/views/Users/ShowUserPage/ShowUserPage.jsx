import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import userActions from 'actions/userActions';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import { Field, reduxForm } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';
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

class ShowUserPage extends React.Component {
  constructor(props) {
    super(props);
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

  submitUpdate = (values) => {
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
      handleSubmit,
      pristine,
      submitting,
    } = this.props;

    if (fetching && !fetched) {
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
                    <form
                      className={classes.form}
                      onSubmit={handleSubmit(val => this.submitUpdate(val))}
                    >
                      <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>User Profile</h4>
                      </CardHeader>
                      <CardBody>
                        <Field
                          name="first_name"
                          label="First Name"
                          id="firstName"
                          component={renderTextField}
                          fullWidth
                          propClasses={classes}
                          classes={{
                            root: classes.formControl,
                          }}
                        />
                        <Field
                          name="last_name"
                          label="Last Name"
                          id="lastName"
                          component={renderTextField}
                          fullWidth
                          propClasses={classes}
                          classes={{
                            root: classes.formControl,
                          }}
                        />
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
                    </form>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="danger" size="lg">
                        change password
                      </Button>
                    </CardFooter>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

ShowUserPage.defaultProps = {
  user: null,
  submitting: false,
  pristine: false,
};

ShowUserPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  updateUser: PropTypes.func.isRequired,
  user: PropTypes.object,
  submitting: PropTypes.bool,
  pristine: PropTypes.bool,
};

export default compose(
  connect(
    state => ({
      initialValues: state.user.user.user,
      user: state.user,
      currentUser: state.authentication,
    }),
    {
      getUser: userActions.fetchUser,
      updateUser: userActions.updateUser,
    },
  ),
  reduxForm({
    form: 'ShowUserPage',
    validate,
    enableReinitialize: true,
  }),
  withStyles(showUserPageStyle),
)(ShowUserPage);
