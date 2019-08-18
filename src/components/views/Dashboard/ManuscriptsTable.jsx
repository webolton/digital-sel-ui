import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MaterialTable from 'material-table';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { Field } from 'redux-form';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import AddBox from '@material-ui/icons/AddBox';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

const styles = {};

const renderCheckbox = ({ input, field, label, witness, change }) => (
  <Tooltip title={witness.title} aria-label={witness.title}>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={e => {
            // change('10', true)
            input.onChange(e)
            change("'10'", true)
          }}
        />
      }
      label={label}
    />
  </Tooltip>
)

class ManuscriptsTable extends React.Component {
  componentDidMount() {
    const { selectedWitnesses } = this.props;
  }

  handleSelect = (rows, manuscripts) => {
    const { handleManuscriptChange } = this.props;
    const currentManuscripts = [];
    rows.forEach((row) => {
      if (manuscripts[row.dataIndex]) {
        currentManuscripts.push(manuscripts[row.dataIndex]);
      }
    });
    handleManuscriptChange(currentManuscripts);
  }

  renderWitnessCheck = (rowData, change) => (
    rowData.witnesses.map(witness => (
      <Field name={`'${witness.id}'`} component={renderCheckbox} label={witness.sl_siglum} witness={witness} change={change} />
    )))


  render() {
    const { manuscripts, loadIds, change } = this.props;
    const options = {
      filter: false,
      print: false,
      viewColumns: false,
      responsive: 'scroll',
      onRowsSelect: (currentRowsSelected, allRowsSelected) => {
        this.handleSelect(allRowsSelected, manuscripts);
      },
    };
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          icons={tableIcons}
          columns={[
            { title: 'Shelfmark', field: 'shelfmark' },
            {
              title: 'Witnesses',
              field: 'witnesses',
              render: rowData => this.renderWitnessCheck(rowData, change),
            },
          ]}
          data={manuscripts}
          title="Manuscripts"
        />
      </div>
    );
  }
}

ManuscriptsTable.propTypes = {
  manuscripts: PropTypes.array.isRequired,
  handleManuscriptChange: PropTypes.func.isRequired,
};

export default compose(
  connect(
    state => ({ // eslint-disable-line no-unused-vars
    }),
  ),
  withStyles(styles),
)(ManuscriptsTable);
