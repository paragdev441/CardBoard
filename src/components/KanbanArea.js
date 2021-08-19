import React from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import BlockHeader from './BlockHeader';
import BlockBody from './BlockBody';

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
}) => {
  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      {Object.entries(columns).map(([id, column], index, callingArr) => {
        return (
          <div
            className="kanban-board-area"
            style={{ marginLeft: '5rem' }}
            key={id}
          >
            <BlockHeader
              BlockId={id}
              Blockindex={index}
              callingArr={callingArr}
              column={column}
              addCardBlock={addCardBlock}
              deleteCardBlock={deleteCardBlock}
              editColumnTitle={editColumnTitle}
              addCard={addCard}
            />
            <Droppable droppableId={id} key={id}>
              {(provided, snapshot) => {
                return (
                  <BlockBody
                    droppableprovided={provided}
                    droppableSnapshot={snapshot}
                    blockId={id}
                    column={column}
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
