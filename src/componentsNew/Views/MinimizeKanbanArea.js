import React from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

const MinimizeKanbanArea = ({ blockId, column, handleToogle }) => {
  return (
    <div className="short-kanban-board-area">
      <span
        style={{ position: 'fixed', bottom: '14px' }}
        onClick={() => handleToogle(false, blockId)}
      >
        <span>
          <MdKeyboardArrowUp className="toogle-open-arrow-button" />
        </span>
      </span>
      {column.name !== '' ? (
        <span className="mini-kanban-title full-name">
          {column.name}{' '}
          <span className="mini-kanban-items-label">
            ({column.items.length} items)
          </span>
        </span>
      ) : (
        <span className="mini-kanban-title no-name">
          New Swimlane{' '}
          <span className="mini-kanban-items-label">
            ({column.items.length} items)
          </span>
        </span>
      )}
    </div>
  );
};

export default MinimizeKanbanArea;
