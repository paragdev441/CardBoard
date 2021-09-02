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
  filterOptions,
  setColumns,
  onDragEnd,
  addCardBlock,
  deleteCardBlock,
  editColumnTitle,
  addCard,
  deleteCard,
  genericHandleChange,
}) => {
  const [isOnline, setOnline] = useState(true);
  const [modifiedColumns, setModifiedColumns] = useState(columns);
  let { type, value } = filterOptions;

  const filterArray = (items) => {
    switch (type) {
      case 'assignedTo':
        return items.filter((item) => item.title === value);
      case 'status':
        return items.filter((item) => item.status.includes(value));
      case 'description':
        return items.filter((item) => item.description === value);
      case 'tags':
        return items.filter((item) => item.status.includes(value));
      default:
        return items;
    }
  };

  useEffect(() => {
    if (type !== '') {
      console.log('enter');
      let tempModifiedColumns = modifiedColumns;
      tempModifiedColumns = Object.entries(tempModifiedColumns).map(
        ([id, column]) => {
          let tempColumn = { ...column }; // {name, items}
          tempColumn.items = filterArray(tempColumn.items);
          return [id, tempColumn];
        }
      );

      setModifiedColumns(tempModifiedColumns);
    }
  }, [filterOptions]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (window.navigator.onLine === false) {
  //       setOnline(false);
  //     } else {
  //       setOnline(true);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [isOnline]);

  console.log('hit', modifiedColumns);

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      {Object.entries(modifiedColumns).map(
        ([id, column], index, callingArr) => {
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
                genericHandleChange={genericHandleChange}
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
                      isOnline={isOnline}
                      deleteCard={deleteCard}
                      genericHandleChange={genericHandleChange}
                    />
                  );
                }}
              </Droppable>
            </div>
          );
        }
      )}
    </DragDropContext>
  );
};

export default KanbanArea;
