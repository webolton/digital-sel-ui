import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MUIDataTable from 'mui-datatables';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { Field, reduxForm } from 'redux-form';
import Checkbox from '@material-ui/core/Checkbox';

const styles = {};

const renderCheckbox = ({ input, label, witness }) => (
  <div>
    <FormControlLabel
      control={(
        <Checkbox
          value={witness.id}
          onChange={input.onChange}
        />
      )}
      label={label}
    />
  </div>
);

const formatMsCheckboxes = witness => (
  <Field name={`"${witness.id}""`} component={renderCheckbox} label={witness.ms_siglum} witness={witness} value={witness.id} />
);

const formatWitnessList = witnesses => (
  <form>
    {console.log(witnesses)}
    <FormGroup row aria-label="Saints' Legend-Manuscript Choices">
      {witnesses.map(witness => (
        formatMsCheckboxes(witness)
      ))}
    </FormGroup>
  </form>
);

const columns = [
  {
    name: 'shelfmark',
    label: 'Shelfmark',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'witnesses',
    label: 'Saints\' Legends',
    options: {
      filter: true,
      sort: false,
      customBodyRender: (witnesses, tableMeta, updateValue) => formatWitnessList(witnesses),
    },
  },
];

class ManuscriptsTable extends React.Component {
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

  render() {
    const { manuscripts } = this.props;

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
      <MUIDataTable
        title="Manuscripts"
        data={manuscripts}
        columns={columns}
        options={options}
      />
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
  reduxForm({
    form: 'ManuscriptsForm',
    enableReinitialize: true,
  }),
  withStyles(styles),
)(ManuscriptsTable);
