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
        <span
          style={{
            fontSize: '2em',
            color: '#1b720c',
            fontWeight: '500',
          }}
        >
          {column.name}{' '}
          <span
            style={{
              fontWeight: 'initial',
              fontSize: 'initial',
              color: 'grey',
            }}
          >
            ({column.items.length} items)
          </span>
        </span>
      ) : (
        <span
          style={{
            fontSize: '2em',
            color: '#1a730b',
            fontWeight: '500',
            color: 'grey',
          }}
        >
          New Swimlane{' '}
          <span
            style={{
              fontWeight: 'initial',
              fontSize: 'initial',
              color: 'grey',
            }}
          >
            ({column.items.length} items)
          </span>
        </span>
      )}
    </div>
  );
};

export default MinimizeKanbanArea;
