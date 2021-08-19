import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { GrAddCircle } from 'react-icons/gr';
import { CgMenuGridO } from 'react-icons/cg';
import { AiFillDelete } from 'react-icons/ai';

import CardBlock from './CardBlock';

/******* T0 be use later *********/
import { AiOutlineExpandAlt } from 'react-icons/ai';
// import KanbanBlock from './KanbanBlock';
// import { kanbanData, singleKanabanData } from './kanbanData';
// import CardBlockModal from './Modals/CardBlockModal';
import CardModal from './Modals/CardModal';
// import CardBlockModal from './Modals/CardBlockModal';
/**********************************/

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
  const [isOpen, setOpen] = useState(false);

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
            <div className="open-options">
              <div
                // className="smart-buttons"
                // data-toggle="modal"
                // data-target="#exampleModal"
                onClick={() => addCardBlock(id, index)}
              >
                <GrAddCircle />
              </div>
              {callingArr.length > 1 ? (
                <div onClick={() => deleteCardBlock(id, index)}>
                  <AiFillDelete />
                </div>
              ) : null}
            </div>
            {/* <CardBlockModal /> */}
            <h2
              className="board-title"
              // contenteditable="true"
              // onChange={({ target }) => editColumnTitle(target.value, id)}
            >
              <input
                className="editable-left"
                placeholder="Enter Card Name"
                value={column.name}
                onChange={({ target }) => editColumnTitle(target.value, id)}
              />
              <div
                style={{
                  textAlign: 'left',
                  color: 'grey',
                  fontSize: '17px',
                  marginLeft: '5px',
                }}
              >
                {column.items.length} items
              </div>
              {/* {column.name !== '' ? column.name : 'Enter Card Block name'} */}
            </h2>
            <button
              type="button"
              class="btn btn-success"
              style={{ width: '100%', borderBottom: '3px solid green' }}
              onClick={() => addCard(id)}
            >
              Add
            </button>
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
                                  key={item.id}
                                >
                                  <div
                                    className="open-card-options"
                                    onClick={() => setOpen(true)}
                                  >
                                    <span
                                      style={{ padding: '5px' }}
                                      className="smart-buttons"
                                      data-toggle="modal"
                                      data-backdrop="static"
                                      data-target={`#cardModal${index}${id}`}
                                    >
                                      <AiOutlineExpandAlt />
                                    </span>
                                    <span {...provided.dragHandleProps}>
                                      <CgMenuGridO />
                                    </span>
                                    <span
                                      style={{ cursor: 'pointer' }}
                                      onClick={() => deleteCard(id, index)}
                                    >
                                      <AiFillDelete />
                                    </span>
                                  </div>
                                  {isOpen ? (
                                    <CardModal
                                      // key={id}
                                      cardData={item}
                                      uuid={id}
                                      index={index}
                                      isOpen={isOpen}
                                      setOpen={setOpen}
                                      handleChange={handleChange}
                                      handleEditFormSubmit={
                                        handleEditFormSubmit
                                      }
                                    />
                                  ) : null}
                                  <CardBlock
                                    key={item.id}
                                    uuid={id}
                                    index={index}
                                    item={item}
                                    handleChange={handleChange}
                                  />
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
  );
};

export default KanbanArea;
