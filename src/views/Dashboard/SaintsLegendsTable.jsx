import React from 'react';
import PropTypes from 'prop-types';
import MUIDataTable from 'mui-datatables';

const columns = [
  {
    name: 'siglum',
    label: 'Siglum',
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: 'title',
    label: 'Title',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const handleSelect = () => {
  console.log(this.state)
}

const SaintsLegendsTable = (props) => {
  const { saints_legends } = props;

  const options = {
    filter: false,
    print: false,
    viewColumns: false,
    responsive: 'scroll',
    onRowsSelect: handleSelect,
  };

  return (
    <MUIDataTable
      title="Saints Legends"
      data={saints_legends}
      columns={columns}
      options={options}
    />
  );
};

SaintsLegendsTable.propTypes = {
  manuscripts: PropTypes.array.isRequired,
};

export default SaintsLegendsTable;
