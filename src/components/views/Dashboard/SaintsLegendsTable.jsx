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

  render() {
    const { saints_legends } = this.props;
    console.log(saints_legends)
    const options = {
      filter: false,
      print: false,
      viewColumns: false,
      responsive: 'scroll',
      onRowsSelect: (currentRowsSelected, allRowsSelected) => {
        this.handleSelect(allRowsSelected, saints_legends);
      },
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
