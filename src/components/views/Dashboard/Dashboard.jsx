import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { formValueSelector } from 'redux-form';
import manuscriptActions from 'actions/manuscriptActions';
import saintsLegendActions from 'actions/saintsLegendActions';
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
import _ from 'lodash';

const selector = formValueSelector('SaintsLegendsForm');

class Dashboard extends React.Component {
  componentDidMount() {
    const { fetchManuscripts, fetchSaintsLegends } = this.props;
    fetchManuscripts();
    fetchSaintsLegends();
  }

  handleManuscriptChange = (manuscripts) => {
    // console.log(manuscripts);
  }

  handleSaintsLegendsChange = (saintsLegends) => {
    // console.log(saintsLegends);
  }

  selectedWitnesses = () => {
    let selectedWitnessIds = [];
    const slData = this.props.selectedWitnesses.slData;
    const msData = this.props.selectedWitnesses.msData;
    if (this.props.selectedWitnesses.slData || this.props.selectedWitnesses.msData) {
      if (this.props.selectedWitnesses.slData.values) {
        // const selectedWitnessIds = [];
        const current = this.props.selectedWitnesses.slData.values;
        console.log(Object.keys(current))
        const selectedWitnesses = selectedWitnessIds.concat(Object.keys(current.map(key => parseInt(key))))
        console.log(selectedWitnesses)
      }
    }
  }

  render() {
    const {
      classes,
    } = this.props;

    const fetchingMSS = this.props.manuscripts.fetching;
    const fetchedMSS = this.props.manuscripts.fetched;
    const fetchingSts = this.props.saintsLegends.fetching;
    const fetchedSts = this.props.saintsLegends.fetched;

    const { manuscripts } = this.props.manuscripts.manuscripts;
    const { saints_legends } = this.props.saintsLegends.saintsLegends;

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
              {(fetchingMSS || fetchingSts) ? (
                <div className={classes.progress}>
                  <CircularProgress />
                </div>
              ) : (
                <div className={classes.panelWrapper}>
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
                  <SaintsLegendsTable
                    saints_legends={saints_legends}
                    handleSaintsLegendsChange={this.handleSaintsLegendsChange}
                  />
                </div>
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
      manuscripts: state.manuscripts,
      saintsLegends: state.saintsLegends,
      selectedWitnesses: {
        slData: state.form.SaintsLegendsForm,
        msData: state.form.ManuscriptsForm,
      },
    }),
    {
      fetchManuscripts: manuscriptActions.fetchManuscripts,
      fetchSaintsLegends: saintsLegendActions.fetchSaintsLegends,
    },
  ),
  withStyles(dashboardStyles),
)(Dashboard);
