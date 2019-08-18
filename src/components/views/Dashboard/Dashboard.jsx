import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { formValueSelector, change } from 'redux-form';
import { load as witnessIdReducer } from 'reducers/witnessIdReducer';
import witnessActions from 'actions/witnessActions';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import Card from 'components/Card';
import CardBody from 'components/Card/CardBody';
import CardHeader from 'components/Card/CardHeader';
import CardFooter from 'components/Card/CardFooter';
import CircularProgress from '@material-ui/core/CircularProgress';
import dashboardStyles from 'assets/javascripts/views/dashboard/dashboardStyles';
import ManuscriptsTable from './ManuscriptsTable';
import SaintsLegendsTable from './SaintsLegendsTable';
import { reset, reduxForm } from 'redux-form';
import _ from 'lodash';

const witnessIds = {1: true};

const selector = formValueSelector('SaintsLegendsForm');

const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({change}, dispatch);
}

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchWitnesses, dispatch } = this.props;
    fetchWitnesses();
    dispatch(reset('witnessesForm'));
  }

  selectedWitnesses = () => {
    if (this.props.selectedWitnesses.witnessData) {
      if (this.props.selectedWitnesses.witnessData.values) {
        console.log(this.props.selectedWitnesses.witnessData.values)
        return this.props.selectedWitnesses.witnessData.values
      }
    }
  }

  setSelected = (witnessCollection) => {
    const selectedWitnesses = this.selectedWitnesses();
    if(selectedWitnesses) {
      const updatedObject = {}
      let updatedSaintsArray;
      // console.log(witnessCollection)
      // updatedSaintsArray = witnessCollection.saints_legends.map(legend => {
      //   console.log(selectedWitnesses[witness.id.toString()])
      //   debugger
      // })
    }
    return witnessCollection
  }

  render() {
    const {
      classes,
      loadIds,
      change,
    } = this.props;
    const { witnesses, saints_legends, manuscripts } = this.props.witnesses.witnesses;
    const fetchingWitnesses = this.props.witnesses.fetching;
    const fetchedWitnesses= this.props.witnesses.fetched;

    this.selectedWitnesses();

    return (
      <GridContainer className={classes.dashboardContainer}>
      <GridItem xs={0} sm={0} md={2} lg={2} />
        <GridItem xs={12} sm={12} md={8} lg={8}>
          <Card>
            <CardHeader color="primary" className={classes.cardHeader}>
              <Typography
                variant="h5"
                color="inherit"
                align="center"
              >
                Text Selection Dashboard
              </Typography>
            </CardHeader>
            <CardBody>
              <Card className={classes.selectionInfoWrapper}>
                <CardBody>
                  <Typography>
                    No texts selected.
                  </Typography>
                </CardBody>
              </Card>
              {fetchingWitnesses ? (
                <div className={classes.progress}>
                  <CircularProgress />
                </div>
              ) : (
                <form className={classes.panelWrapper}>
                  <div className={classes.column}>
                    <Typography className={classes.heading}>Manuscripts</Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography
                      className={classes.secondaryHeading}
                    >
                      Filter your selection by manuscript
                    </Typography>
                  </div>
                  <ManuscriptsTable
                    manuscripts={manuscripts}
                    handleManuscriptChange={this.handleManuscriptChange}
                    selectedWitnesses={this.selectedWitnesses()}
                    loadIds={loadIds}
                    change={change}
                  />
                  <div className={classes.column}>
                    <Typography
                      className={classes.heading}
                    >
                      Saints&rsquo; Legends
                    </Typography>
                  </div>
                  <div className={classes.column}>
                    <Typography
                      className={classes.secondaryHeading}
                    >
                      Filter your selection by saints&rsquo; legends
                    </Typography>
                  </div>
                  {/* <SaintsLegendsTable
                    saints_legends={saints_legends}
                    handleSaintsLegendsChange={this.handleSaintsLegendsChange}
                    // selectedWitnesses={this.handleManuscriptChange()}
                  /> */}
                </form>
              )}
            </CardBody>
            <CardFooter />
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Dashboard.propTypes = {
  fetchManuscripts: PropTypes.func.isRequired,
  manuscripts: PropTypes.shape({
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    manuscripts: {
      manuscripts: PropTypes.array,
    },
  }).isRequired,
  fetchSaintsLegends: PropTypes.func.isRequired,
  saintsLegends: PropTypes.shape({
    fetching: PropTypes.bool,
    fetched: PropTypes.bool,
    saintsLegends: {
      saints_legends: PropTypes.array,
    },
  }).isRequired,
  classes: PropTypes.object.isRequired,
};

export default compose(
  connect(
    state => ({
      witnesses: state.witnesses,
      initialValues: state.witnessIds,
      selectedWitnesses: {
        witnessData: state.form.witnessesForm,
      },
    }),
    {
      fetchWitnesses: witnessActions.fetchWitnesses,
      loadIds: witnessIdReducer,
    },
  ),
  reduxForm({
    form: 'witnessesForm',
    // enableReinitialize: true,
  }),
  withStyles(dashboardStyles),
)(Dashboard);
