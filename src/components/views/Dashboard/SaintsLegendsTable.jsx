import React from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';

const columns = [
  {
    name: 'title',
    label: 'Title',
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: 'siglum',
    label: 'Siglum',
    options: {
      filter: true,
      sort: true,
    },
  },
];

class SaintsLegendsTable extends React.Component {
  handleSelect = (rows, saints_legends) => {
    const { handleSaintsLegendsChange } = this.props;
    const currentSaintsLegends = [];
    rows.forEach((row) => {
      if (saints_legends[row.dataIndex]) {
        currentSaintsLegends.push(saints_legends[row.dataIndex]);
      }
    });
    handleSaintsLegendsChange(currentSaintsLegends);
  }

  transcriptionAvailible = (dataIndex, saints_legends) => {
    const currentLegend = saints_legends[dataIndex];
    let isTranscribed;
    currentLegend.witnesses.forEach((witness) => {
      if (witness.transcribed === true) {
        isTranscribed = true;
      }
    });
    return isTranscribed;
  }

  render() {
    const { saints_legends } = this.props;
    const options = {
      filter: false,
      print: false,
      viewColumns: false,
      responsive: 'scroll',
      onRowsSelect: (currentRowsSelected, allRowsSelected) => {
        this.handleSelect(allRowsSelected, saints_legends);
      },
      isRowSelectable: dataIndex => this.transcriptionAvailible(dataIndex, saints_legends),
    };

    return (
      <MUIDataTable
        title="Saints Legends"
        data={saints_legends}
        columns={columns}
        options={options}
      />
    );
  }
}

SaintsLegendsTable.propTypes = {
  saints_legends: PropTypes.array.isRequired,
  handleSaintsLegendsChange: PropTypes.func.isRequired,
};

export default SaintsLegendsTable;
