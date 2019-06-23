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

export default ManuscriptsTable;
