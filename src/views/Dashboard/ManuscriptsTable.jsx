import React from 'react';
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

const options = {
  filterType: 'checkbox',
};

const ManuscriptsTable = (props) => {
  const { manuscripts } = props;
  return (
    <MUIDataTable
      title="Manuscripts"
      data={manuscripts}
      columns={columns}
      options={options}
    />
  );
};

export default ManuscriptsTable;
