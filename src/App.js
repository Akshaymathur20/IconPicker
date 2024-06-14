import React from 'react';
import IconPicker from './components/IconPicker';
import styles from './index.css'

const App = () => {
  return (
   <div className='bigcontainer'>
        <h1>Select App Icon</h1>
    <div className='container'>
      <IconPicker
        rowsInOnePage={5}
        columnsInOnePage={5}
        iconHeight={50}
        iconWidth={50}
      />
    </div>
   </div>
  );
};

export default App;
