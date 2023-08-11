import React from 'react';
import SampleForm from './SampleForm';
import MuiDataGrid from './MuiDataGrid';
import MuiCharts from './MuiCharts';
import AgGrid from './AgGrid';
import AlertDialog from './AlertDialog';

const App = (props) => {
  const [dialogResponse, setDialogResponse] = React.useState('No Response');
  return (
    <>
      <div className='p-5'>
        <h2>MUI and Other Libraries</h2>
        {/* <SampleForm /> */}
        {/* <MuiDataGrid /> */}

        {/* <MuiCharts /> */}
        <AlertDialog onChoose={setDialogResponse} />
        <p>Alert dialog response: {dialogResponse}</p>
        <AgGrid />
      </div>
    </>
  );
};

export default App;
