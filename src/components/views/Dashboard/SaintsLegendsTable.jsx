import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import MUIDataTable from 'mui-datatables';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';
import { Field, formValueSelector } from 'redux-form';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';

const styles = {};

const checkedValue = (props) => {
  // console.log(props)
}

const updateValue = (value) => {
  // console.log(value)
}

const renderCheckbox = ({ input, label, witness, input: {onChange} }) => (
  <Tooltip title={witness.shelfmark} aria-label={witness.shelfmark}>
    <FormControlLabel
      checked={witness.selected}
      control={(
        <Checkbox
          value={witness.id}
          onChange={input.onChange}
        />
      )}
      label={label}
    />
  </Tooltip>
);


const formatMsCheckboxes = (witness) => (
  <Field name={`'${witness.id}'`} component={renderCheckbox} label={witness.ms_siglum} witness={witness} value={witness.id} onChange={updateValue}/>
);

const formatWitnessMsList = (witnesses, tableMeta, updateValue) => (
  <FormGroup
    row
    aria-label="Saints' Legend-Manuscript Choices"
    >
    {witnesses.map(witness => (
      formatMsCheckboxes(witness)
    ))}
  </FormGroup>
);
const columns = [
  {
    name: 'title',
    label: 'Title',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'witnesses',
    label: 'Manuscript Witnesses',
    options: {
      filter: true,
      sort: true,
      customBodyRender: (witnesses, tableMeta, updateValue) => formatWitnessMsList(witnesses),
    },
  },
];


class SaintsLegendsTable extends React.Component {
  // state = { selectedIds: [] }
  //
  // handleSelect = (rows, saints_legends) => {
  //   const { handleSaintsLegendsChange } = this.props;
  //   const currentSaintsLegends = [];
  //   rows.forEach((row) => {
  //     if (saints_legends[row.dataIndex]) {
  //       currentSaintsLegends.push(saints_legends[row.dataIndex]);
  //     }
  //   });
  //   handleSaintsLegendsChange(currentSaintsLegends);
  // }
  //

  transcriptionAvailible = (dataIndex, saints_legends) => {
    const currentLegend = saints_legends[dataIndex];
    currentLegend.witnesses.forEach(witness => witness.transcribed);
  }

  render() {
    const { saints_legends, loadIds } = this.props;

    const options = {
      filter: false,
      print: false,
      viewColumns: false,
      responsive: 'scroll',
      onRowsSelect: (currentRowsSelected, allRowsSelected) => {
        this.handleSelect(allRowsSelected, saints_legends);
      },
      // isRowSelectable: dataIndex => this.transcriptionAvailible(dataIndex, witnesses),
    };

    return (
      <div>
        <button type="button" onClick={() => loadIds(witnessIds)}>
          Load Account
        </button>
      <MUIDataTable
        title="Saints Legends"
        data={saints_legends}
        columns={columns}
        options={options}
      />
    </div>
    );
  }
}

SaintsLegendsTable.propTypes = {
  witnesses: PropTypes.array.witnesses,
  // handleSaintsLegendsChange: PropTypes.func.isRequired,
};

const selector = formValueSelector('selectedWitnesses')
export default compose(
  connect(
    state => ({
      selectedWitnesses: {
        witnessData: state.form.witnessesForm,
      },
      selectedIds: selector(state, 'selectedIds')
    }),
  ),
  withStyles(styles),
)(SaintsLegendsTable);
