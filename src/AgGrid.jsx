import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import React, { useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';

const AgGrid = (props) => {
  const gridRef = useRef();

  const [columnDefs, setColumnDefs] = useState([
    { field: 'make', filter: true },
    { field: 'model', filter: true },
    { field: 'price' },
  ]);

  const rowData = [
    {
      make: 'Toyota',
      model: 'Corolla Altis',
      price: 1500000,
    },
    {
      make: 'Honda',
      model: 'City',
      price: 2000000,
    },
    {
      make: 'Hyundai',
      model: 'Creta',
      price: 2500000,
    },
  ];

  const defaultColDef = () => ({
    sortable: true,
  });

  const cellClickedListener = (e) => {
    console.log('cell clicked', e);
  };

  const buttonListener = (e) => {
    gridRef.current.api.deselectAll();
  };

  return (
    <>
      <div>
        {/* Example using Grid's API */}
        <button onClick={buttonListener}>Push Me</button>

        {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
        <div className='ag-theme-alpine' style={{ width: 500, height: 500 }}>
          <AgGridReact
            ref={gridRef} // Ref for accessing Grid's API
            rowData={rowData} // Row Data for Rows
            columnDefs={columnDefs} // Column Defs for Columns
            defaultColDef={defaultColDef} // Default Column Properties
            animateRows={true} // Optional - set to 'true' to have rows animate when sorted
            rowSelection='multiple' // Options - allows click selection of rows
            onCellClicked={cellClickedListener} // Optional - registering for Grid Event
          />
        </div>
      </div>
    </>
  );
};

export default AgGrid;
