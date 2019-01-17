/* eslint no-unused-vars: 0 */

import React from 'react';
import { connect } from 'react-redux';
import userActions from 'actions/userActions';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Button from 'components/CustomButtons/Button';
import Card from 'components/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';
import CustomInput from 'components/CustomInput/CustomInput';
import loginPageStyle from 'assets/javascripts/views/users/loginPageStyle';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      submitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;
    if (email && password) {
      dispatch(userActions.login(email, password));
    }
  }

  render() {
    const {
      loggingIn,
      classes,
      alert,
      ...rest
    } = this.props;

    const { email, password, submitted } = this.state;
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
                  <form className={classes.form} onSubmit={this.handleSubmit}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                    </CardHeader>
                    <CardBody>
                      {alert.message
                        && <p className={classes.unauthorized}>Incorrect email or password.</p>
                      }
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
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: 'password',
                          onChange: this.handleChange,
                          name: 'password',
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="primary" size="lg" type="submit">
                        Submit
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

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  const { alert } = state;
  return {
    loggingIn,
    alert,
  };
}

LoginPage.defaultProps = {
  loggingIn: false,
  rest: {},
  email: '',
  password: '',
  submitted: false,
  dispatch: {},
  alert: {},
};

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired,
  loggingIn: PropTypes.bool,
  rest: PropTypes.object,
  email: PropTypes.string,
  password: PropTypes.string,
  submitted: PropTypes.bool,
  dispatch: PropTypes.func,
  alert: PropTypes.object,
};


export default connect(mapStateToProps)(withStyles(loginPageStyle)(LoginPage));
