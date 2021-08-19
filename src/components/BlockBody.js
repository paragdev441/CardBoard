import React, { useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import CardBlock from './CardBlock';
import CardHeader from './CardHeader';
import CardModal from './Modals/CardModal';

const BlockBody = ({
  droppableprovided,
  droppableSnapshot,
  blockId,
  column,
  deleteCard,
  handleChange,
  handleEditFormSubmit,
}) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className="kanban-block"
      {...droppableprovided.droppableProps}
      ref={droppableprovided.innerRef}
      style={{
        background: droppableSnapshot.isDraggingOver ? '#0c7fa5' : 'lightblue',
      }}
    >
      <>
        {column.items.map((item, index) => {
          return (
            <Draggable key={item.id} draggableId={item.id} index={index}>
              {(provided, snapshot) => {
                return (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={{
                      backgroundColor: snapshot.isDragging
                        ? '#10bd10'
                        : '#7bef7b',
                      color: snapshot.isDragging ? '#053c05' : '#096314',
                      ...provided.draggableProps.style,
                    }}
                    className="card-block"
                    key={item.id}
                  >
                    <CardHeader
                      blockId={blockId}
                      index={index}
                      provided={provided}
                      setOpen={setOpen}
                      deleteCard={deleteCard}
                    />
                    {isOpen ? (
                      <CardModal
                        // key={id}
                        cardData={item}
                        uuid={blockId}
                        index={index}
                        isOpen={isOpen}
                        setOpen={setOpen}
                        handleChange={handleChange}
                        handleEditFormSubmit={handleEditFormSubmit}
                      />
                    ) : null}
                    <CardBlock
                      key={item.id}
                      uuid={blockId}
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
      {droppableprovided.placeholder}
    </div>
  );
};

export default BlockBody;
