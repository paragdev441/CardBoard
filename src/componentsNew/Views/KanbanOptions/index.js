import React, { useState } from 'react';
import FilterModal from '../../Modals/FilterModal';
import HideFieldsModal from '../../Modals/HideFieldsModal';
import SortModal from '../../Modals/SortModal';

const KanbanOptions = ({
  filterOptions,
  sortOptions,
  blockNames,
  handleBlockFilter,
  handleSort,
  handleBlockHiding,
  resetOptions,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [activateOption, setActivateOption] = useState('');

  const handleOptionClick = (optionName) => {
    setActivateOption(optionName);
    if (
      optionName === 'filter' ||
      optionName === 'sort' ||
      optionName === 'hide-fields'
    ) {
      setOpen(true);
    }
  };

  // console.log(sortOptions, 'dddddddd');
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
        <span
          className={`${
            activateOption === 'sort'
              ? 'kanban-option-nav-item-active'
              : 'kanban-option-nav-item'
          }`}
          onClick={() => handleOptionClick('sort')}
          data-toggle="modal"
          data-target="#sortModal"
          data-backdrop="static"
        >
          Sort
        </span>
        <span
          className={`${
            activateOption === 'hide-fields'
              ? 'kanban-option-nav-item-active'
              : 'kanban-option-nav-item'
          }`}
          onClick={() => handleOptionClick('hide-fields')}
          data-toggle="modal"
          data-target="#hideFields"
          data-backdrop="static"
        >
          Hide Fields
        </span>
        {isOpen ? (
          <FilterModal
            filterOptions={filterOptions}
            handleBlockFilter={handleBlockFilter}
            resetOptions={resetOptions}
            setOpen={setOpen}
          />
        ) : null}
        {isOpen ? (
          <SortModal
            sortOptions={sortOptions}
            handleSort={handleSort}
            resetOptions={resetOptions}
            setOpen={setOpen}
          />
        ) : null}
        {isOpen ? (
          <HideFieldsModal
            blockNames={blockNames}
            handleBlockHiding={handleBlockHiding}
            resetOptions={resetOptions}
            setOpen={setOpen}
          />
        ) : null}
      </div>
    </div>
  );
};

export default KanbanOptions;
