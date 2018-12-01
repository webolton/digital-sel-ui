/* eslint no-unused-vars: 0 */

import React from 'react';
import { connect } from 'react-redux';
import { userActions } from 'actions';
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

class ShowUserPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      submitted: false,
      cardAnimaton: 'cardHidden',
    };

    const userId = this.props.match.params.id;
    this.props.dispatch(userActions.getUserById(userId));

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.setState({ cardAnimaton: '' });
      },
      50,
    );
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { first_name, last_name, email } = this.state;
    const { dispatch } = this.props;
    if (first_name && last_name && email) {

    }
  }

  render() {
    const {
      classes,
      alert,
      currentUser,
      user,
      ...rest
    } = this.props;

    const {
      first_name, last_name, email, submitted,
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
            { user.loading ? (
              <Progress />
            ) : (
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={4}>
                  <Card className={classes[this.state.cardAnimaton]}>
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
                            name: 'first_name',
                            value: user.user.first_name,
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
                            name: 'last_name',
                            value: user.user.last_name,
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
                            value: user.user.email,
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

function mapStateToProps(state) {
  const { authentication, user } = state;
  const { currentUser } = authentication;
  return {
    currentUser,
    user,
  };
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
};

ShowUserPage.propTypes = {
  match: {
    id: PropTypes.number.isRequired,
  },
  classes: PropTypes.object.isRequired,
  currentUser: PropTypes.object.isRequired,
  rest: PropTypes.object,
  submitted: PropTypes.bool,
  dispatch: PropTypes.func,
  alert: PropTypes.object,
  user: PropTypes.object,
};

export default connect(mapStateToProps)(withStyles(showUserPageStyle)(ShowUserPage));
