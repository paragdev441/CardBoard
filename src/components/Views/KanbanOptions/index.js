import React, { useState } from 'react';
import FilterModal from '../../Modals/FilterModal';

const KanbanOptions = ({ handleBlockFilter, resetFilters }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      style={{
        padding: '0px 12px',
        borderTop: '1px solid black',
        borderBottom: '1px solid #00000026',
        fontWeight: 500,
        fontSize: 'initial',
      }}
    >
      <div style={{ display: 'flex' }}>
        <span
          style={{
            padding: '10px 15px',
            color: '#4a4aff',
            borderBottom: '2px solid #4a4aff',
          }}
        >
          Kanban
        </span>
        <span style={{ padding: '10px 15px' }}>Group</span>
        <span
          style={{ padding: '10px 15px' }}
          onClick={() => setOpen(true)}
          data-toggle="modal"
          data-target="#exampleModal"
          data-backdrop="static"
        >
          Filter
        </span>
        <span style={{ padding: '10px 15px' }}>Sort</span>
        <span style={{ padding: '10px 15px' }}>Hide Fields</span>
        {isOpen ? (
          <FilterModal
            handleBlockFilter={handleBlockFilter}
            resetFilters={resetFilters}
            setOpen={setOpen}
          />
        ) : null}
      </div>
    </div>
  );
};

export default KanbanOptions;
