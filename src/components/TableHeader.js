import React from 'react';


const TableHeader = ({ COLUMNS }) => {
  return(
    <div>
      <div className='table-header row-reverse '>
        {Object.keys(COLUMNS).map(column => (
          <span 
            key={column}
            style={{width: COLUMNS[column].width}}
          >
            {COLUMNS[column].label}
          </span>
        ))}
      </div>
    </div>
  )	
};

export default TableHeader; 