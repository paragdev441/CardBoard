import React, { useState } from 'react';
import FilterModal from '../../Modals/FilterModal';

const KanbanOptions = ({ handleBlockFilter, resetFilters }) => {
  const [isOpen, setOpen] = useState(false);
  const [activateOption, setActivateOption] = useState('');
  const handleOptionClick = (optionName) => {
    setActivateOption(optionName);
    if (optionName === 'filter') {
      setOpen(true);
    }
  };

  // console.log(activateOption, 'dddddddd');
  return (
    <div className="kanban-options-block">
      <div style={{ display: 'flex' }}>
        <span
          className={`${
            activateOption === 'kanban'
              ? 'kanban-option-nav-item-active'
              : 'kanban-option-nav-item'
          }`}
          onClick={() => handleOptionClick('kanban')}
        >
          Kanban
        </span>
        {/* <span
          className={`${
            activateOption === 'group'
              ? 'kanban-option-nav-item-active'
              : 'kanban-option-nav-item'
          }`}
          onClick={() => handleOptionClick('group')}
        >
          Group
        </span> */}
        <span
          className={`${
            activateOption === 'filter'
              ? 'kanban-option-nav-item-active'
              : 'kanban-option-nav-item'
          }`}
          onClick={() => handleOptionClick('filter')}
          data-toggle="modal"
          data-target="#exampleModal"
          data-backdrop="static"
        >
          Filter
        </span>
        {/* <span
          className={`${
            activateOption === 'sort'
              ? 'kanban-option-nav-item-active'
              : 'kanban-option-nav-item'
          }`}
          onClick={() => handleOptionClick('sort')}
        >
          Sort
        </span> */}
        {/* <span
          className={`${
            activateOption === 'hide fields'
              ? 'kanban-option-nav-item-active'
              : 'kanban-option-nav-item'
          }`}
          onClick={() => handleOptionClick('hide fields')}
        >
          Hide Fields
        </span> */}
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
