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
    name: 'shelfmark',
    label: 'Shelfmark',
    options: {
      filter: true,
      sort: false,
    },
  },
];

const handleSelect = () => {
  console.log(this.state)
}

const ManuscriptsTable = (props) => {
  const { manuscripts } = props;

  const options = {
    filter: false,
    print: false,
    viewColumns: false,
    responsive: 'scroll',
    onRowsSelect: handleSelect,
  };

  return (
    <MUIDataTable
      title="Manuscripts"
      data={manuscripts}
      columns={columns}
      options={options}
    />
  );
};

ManuscriptsTable.propTypes = {
  manuscripts: PropTypes.array.isRequired,
};

export default ManuscriptsTable;
