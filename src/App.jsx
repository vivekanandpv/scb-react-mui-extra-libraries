import React from 'react';
import SampleForm from './SampleForm';
import MuiDataGrid from './MuiDataGrid';
import MuiCharts from './MuiCharts';
import AgGrid from './AgGrid';

const App = (props) => {
  return (
    <>
      <div className='p-5'>
        <h2>MUI and Other Libraries</h2>
        {/* <SampleForm /> */}
        {/* <MuiDataGrid /> */}

        {/* <MuiCharts /> */}
        <AgGrid />
      </div>
    </>
  );
};

export default App;
