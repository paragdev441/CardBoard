import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import BlockHeader from '../Block/BlockHeader';
import BlockBody from '../Block/BlockBody';
import filterKanban from '../../helpers/filterKanban';
import sortKanbann from '../../helpers/sortKanban';
import hideKanbanBlocks from '../../helpers/hideKanbanBlocks';
import MinimizeKanbanArea from './MinimizeKanbanArea';

/**
 * Renders layout of Kanban Area containing multiple Kanban Boards
 * @param {*} param0
 * @returns ReactElement
 */
const KanbanArea = ({
  columns,
  filterOptions,
  sortOptions,
  blockOptions,
  setColumns,
  onDragEnd,
  addCardBlock,
  deleteCardBlock,
  editColumnTitle,
  addCard,
  deleteCard,
  genericHandleChange,
  handleToogle,
}) => {
  const [modifiedColumns, setModifiedColumns] = useState(columns);

  useEffect(() => {
    let tempColumns = filterKanban(columns, filterOptions);
    tempColumns = sortKanbann(tempColumns, sortOptions);
    tempColumns = hideKanbanBlocks(tempColumns, blockOptions);
    setModifiedColumns(tempColumns);
  }, [filterOptions, sortOptions, blockOptions, columns]);

  // console.log('modifiedColumns', modifiedColumns);

  return (
    <DragDropContext
      onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
    >
      {Object.entries(modifiedColumns).map(
        ([id, column], index, callingArr) => {
          return !column.toggle ? (
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
                addCardBlock={addCardBlock}
                deleteCardBlock={deleteCardBlock}
                editColumnTitle={editColumnTitle}
                genericHandleChange={genericHandleChange}
                addCard={addCard}
                handleToogle={handleToogle}
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
                      genericHandleChange={genericHandleChange}
                    />
                  );
                }}
              </Droppable>
            </div>
          ) : (
            <MinimizeKanbanArea
              key={id}
              blockId={id}
              column={column}
              handleToogle={handleToogle}
            />
          );
        }
      )}
    </DragDropContext>
  );
};

export default KanbanArea;
