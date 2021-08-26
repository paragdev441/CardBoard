import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import BlockHeader from '../Block/BlockHeader';
import BlockBody from '../Block/BlockBody';

/**
 * Renders layout of Kanban Area containing multiple Kanban Boards
 * @param {*} param0
 * @returns ReactElement
 */
const KanbanArea = ({
  columns,
  setColumns,
  onDragEnd,
  addCardBlock,
  deleteCardBlock,
  editColumnTitle,
  addCard,
  deleteCard,
  handleChange,
  handleEditFormSubmit,
  handleBlockFilter,
  resetFilters,
}) => {
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.navigator.onLine === false) {
        setOnline(false);
      } else {
        setOnline(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [isOnline]);

  console.log('isOnline', isOnline);

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      {Object.entries(columns).map(([id, column], index, callingArr) => {
        return (
          <div
            className="kanban-board-area"
            style={{ marginLeft: '30px' }}
            key={id}
          >
            <BlockHeader
              BlockId={id}
              Blockindex={index}
              callingArr={callingArr}
              column={column}
              isOnline={isOnline}
              addCardBlock={addCardBlock}
              deleteCardBlock={deleteCardBlock}
              editColumnTitle={editColumnTitle}
              addCard={addCard}
              handleBlockFilter={handleBlockFilter}
              resetFilters={resetFilters}
            />
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => {
                return (
                  <BlockBody
                    droppableprovided={provided}
                    droppableSnapshot={snapshot}
                    blockId={id}
                    column={column}
                    isOnline={isOnline}
                    deleteCard={deleteCard}
                    handleChange={handleChange}
                    handleEditFormSubmit={handleEditFormSubmit}
                  />
                );
              }}
            </Droppable>
          </div>
        );
      })}
    </DragDropContext>
  );
};

export default KanbanArea;
