import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { AiFillDelete } from 'react-icons/ai';

import CardBlock from './CardBlock';
import KanbanBlock from './KanbanBlock';
import kanbanData from './kanbanData';

const Kanban = () => {
  const columnsFromBackend = {
    [uuid()]: {
      name: 'Todo',
      items: kanbanData,
    },
    [uuid()]: {
      name: 'Progress',
      items: [],
    },
  };

  const [columns, setColumns] = useState(columnsFromBackend);

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  return (
    <div>
      <div className="Kanban-header">
        <h1>#Kanban Name 1</h1>
      </div>
      <div className="kanban-board App">
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([id, column]) => {
            return (
              <div
                className="kanban-board-area"
                style={{ marginLeft: '5rem' }}
                key={id}
              >
                <div className="open-options">
                  <div>
                    <GrAddCircle />
                  </div>
                  <div>
                    <AiFillDelete />
                  </div>
                </div>
                <h2 className="board-title">{column.name}</h2>
                <Droppable droppableId={id} key={id}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        className="kanban-block"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        style={{
                          background: snapshot.isDraggingOver
                            ? '#0c7fa5'
                            : 'lightblue',
                        }}
                      >
                        <>
                          <button
                            type="button"
                            class="btn btn-success"
                            style={{ width: '100%' }}
                          >
                            Add
                          </button>
                          {column.items.map((item, index) => {
                            return (
                              <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      // {...provided.dragHandleProps}
                                      style={{
                                        backgroundColor: snapshot.isDragging
                                          ? '#10bd10'
                                          : '#7bef7b',
                                        color: snapshot.isDragging
                                          ? '#053c05'
                                          : '#096314',
                                        ...provided.draggableProps.style,
                                      }}
                                      className="card-block"
                                    >
                                      <div className="open-card-options">
                                        <span style={{ padding: '5px' }}>
                                          <AiOutlineExpandAlt />
                                        </span>
                                        <span {...provided.dragHandleProps}>
                                          <CgMenuGridO />
                                        </span>
                                        <span>
                                          <AiFillDelete />
                                        </span>
                                      </div>
                                      <CardBlock item={item} />
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                        </>
                        {provided.placeholder}
                      </div>
                    );
                  }}
                </Droppable>
              </div>
            );
          })}
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;
