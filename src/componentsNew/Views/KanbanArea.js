import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import BlockHeader from '../Block/BlockHeader';
import BlockBody from '../Block/BlockBody';
import filterKanban from '../../helpers/filterKanban';
import sortKanbann from '../../helpers/sortKanban';

/**
 * Renders layout of Kanban Area containing multiple Kanban Boards
 * @param {*} param0
 * @returns ReactElement
 */
const KanbanArea = ({
  columns,
  filterOptions,
  sortOptions,
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

  // const filterArray = (items) => {
  //   switch (type) {
  //     case 'assignedTo':
  //       return items.filter((item) => {
  //         // console.log(
  //         //   'filterArray',
  //         //   item.title,
  //         //   value,
  //         //   item.title.toLowerCase().includes(value.toLowerCase())
  //         // );
  //         return item.title.toLowerCase().includes(value.toLowerCase());
  //       });
  //     case 'status':
  //       return items.filter((item) => item.status.includes(value));
  //     case 'description':
  //       return items.filter((item) => {
  //         return item.description.toLowerCase().includes(value.toLowerCase());
  //       });
  //     case 'tags':
  //       return items.filter((item) => {
  //         console.log('tags', item.tags, value, item.tags.includes(value));
  //         return item.tags.includes(value);
  //       });
  //     default:
  //       return items;
  //   }
  // };

  useEffect(() => {
    // console.log('enter', type);
    // if (type !== '') {
    //   let tempModifiedColumns = columns;
    //   tempModifiedColumns = Object.entries(tempModifiedColumns).map(
    //     ([id, column]) => {
    //       let tempColumn = { ...column }; // {name, items}
    //       tempColumn.items = filterArray(tempColumn.items);
    //       return [id, tempColumn];
    //     }
    //   );

    //   setModifiedColumns(Object.fromEntries(tempModifiedColumns));
    // } else {
    //   setModifiedColumns(columns);
    // }

    let tempColumns = filterKanban(columns, filterOptions);
    tempColumns = sortKanbann(tempColumns, sortOptions);
    setModifiedColumns(tempColumns);
  }, [filterOptions, sortOptions, columns]);

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

  console.log('modifiedColumns', columns);

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
