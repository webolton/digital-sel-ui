/* eslint no-unused-vars: 0 */

import React from 'react';
import { connect } from 'react-redux';
import userActions from 'actions/userActions';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import People from '@material-ui/icons/People';
import Email from '@material-ui/icons/Email';
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

const mapStateToProps = store => ({
  user: store.user,
  currentUser: store.authentication,
});

const mapDispatchToProps = dispatch => ({
  getUser: (userId) => {
    dispatch(userActions.fetchUser(userId));
  },
});

class ShowUserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      user: {
        firstName: this.props.user.firstName,
        lastName: this.props.user.lastName,
        email: this.props.user.email,
        fetching: this.props.user.fetching,
        fetched: this.props.user.fetched,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(state => ({
      ...state,
      user: {
        ...state.user,
        [name]: value,
      },
    }));
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { first_name, last_name, email } = this.state;
    const { dispatch } = this.props;
  }

  render() {
    const {
      classes,
      alert,
      currentUser,
      ...rest
    } = this.props;

    const {
      user: {
        fetching,
        fetched,
        firstName,
        lastName,
        email,
      },
    } = this.state;
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
            { fetching ? (
              <Progress />
            ) : (
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card>
                    <form className={classes.form} onSubmit={this.handleSubmit}>
                      <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>User Profile</h4>
                      </CardHeader>
                      <CardBody>
                        <CustomInput
                          labelText="First Name"
                          id="firstName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'text',
                            onChange: this.handleChange,
                            name: 'firstName',
                            value: firstName,
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <CustomInput
                          labelText="Last Name"
                          id="lastName"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'text',
                            onChange: this.handleChange,
                            name: 'lastName',
                            value: lastName,
                            endAdornment: (
                              <InputAdornment position="end">
                                <People className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                        <CustomInput
                          labelText="Email"
                          id="email"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: 'email',
                            onChange: this.handleChange,
                            name: 'email',
                            value: email,
                            endAdornment: (
                              <InputAdornment position="end">
                                <Email className={classes.inputIconsColor} />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button simple color="primary" size="lg" type="submit">
                          Update Account
                        </Button>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            )
          }
          </div>
        </div>
      </div>
    );
  }
}

ShowUserPage.defaultProps = {
  match: {
    id: null,
  },
  user: null,
  rest: {},
  submitted: false,
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
  submitted: PropTypes.bool,
  dispatch: PropTypes.func,
  alert: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(showUserPageStyle)(ShowUserPage),
);
