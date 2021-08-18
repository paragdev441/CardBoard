import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import uuid from 'uuid/v4';
import { GrAddCircle } from 'react-icons/gr';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';
import { AiFillDelete } from 'react-icons/ai';

import CardBlock from './CardBlock';
import KanbanBlock from './KanbanBlock';
import { kanbanData, singleKanabanData } from './kanbanData';
import CardBlockModal from './Modals/CardBlockModal';
// import CardModal from './Modals/CardModal';
// import CardBlockModal from './Modals/CardBlockModal';

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

  // const convert = (type, item) => {
  //   return type === 'parse' ? JSON.parse(item) : JSON.stringify(item);
  // };

  const [columns, setColumns] = useState(columnsFromBackend);
  const [kanbanTitle, setKanbanTitle] = useState('#Kanban Name 1');

  useEffect(() => {
    // const loColumns = localStorage.getItem('loColumns');
    // if (loColumns !== null) {
    //   setColumns(convert('parse', localStorage.getItem('loColumns')));
    // } else {
    //   localStorage.setItem(
    //     'loColumns',
    //     convert('stringify', columnsFromBackend)
    //   );
    //   setColumns(columnsFromBackend);
    // }
    // setColumns(columnsFromBackend);
    return () => window.removeEventListener('change', handleChange);
  }, [columns]);

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

  const addCardBlock = (id, index) => {
    let tempColumns = { ...columns };
    let modifiedCol = Object.entries(tempColumns);
    modifiedCol.splice(index + 1, 0, [uuid(), { name: '', items: [] }]);
    modifiedCol = modifiedCol.reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

    setColumns(modifiedCol);
  };

  const editColumnTitle = (value, id) => {
    console.log('value', value);
    let tempColumns = { ...columns };
    tempColumns = { ...tempColumns, [id]: { ...tempColumns[id], name: value } };
    setColumns(tempColumns);
  };

  const deleteCardBlock = (id, index) => {
    let tempColumns = { ...columns };
    let modifiedCol = Object.entries(tempColumns);
    modifiedCol.splice(index, 1);
    modifiedCol = modifiedCol.reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

    setColumns(modifiedCol);
  };

  const addCard = (id) => {
    let tempColumns = { ...columns };
    tempColumns[id] = {
      ...tempColumns[id],
      items: [
        { ...singleKanabanData, id: uuid() },
        ...tempColumns[id]['items'],
      ],
    };
    setColumns(tempColumns);
  };

  const getModifiedItem = (
    tempColumns,
    blockId,
    index,
    parentKey,
    type,
    value
  ) => {
    return {
      ...tempColumns[blockId]['items'][index],
      [parentKey]: {
        ...tempColumns[blockId]['items'][index][parentKey],
        [type]: value,
      },
    };
  };

  const handleChange = (e, type, blockId, index) => {
    let tempColumns = { ...columns };
    console.log(
      `tempColumns[${blockId}]['items'][${index}]['profile'][${type}]`,
      tempColumns[blockId]['items'][index]['profile'][type],
      index
    );
    switch (type) {
      case 'name':
        tempColumns[blockId]['items'][index] = getModifiedItem(
          tempColumns,
          blockId,
          index,
          'profile',
          type,
          e.target.value
        );
        break;
      case 'shortMessage':
        tempColumns[blockId]['items'][index] = getModifiedItem(
          tempColumns,
          blockId,
          index,
          'data',
          type,
          e.target.value
        );
        break;
      case 'threads':
        tempColumns[blockId]['items'][index] = getModifiedItem(
          tempColumns,
          blockId,
          index,
          'data',
          type,
          e.target.value
        );
        break;
      case 'pending':
        tempColumns[blockId]['items'][index] = getModifiedItem(
          tempColumns,
          blockId,
          index,
          'data',
          type,
          e.target.value
        );
        break;
      default:
        return;
    }

    setColumns(tempColumns);
  };

  const deleteCard = (id, cardIndex) => {
    let tempColumns = { ...columns };
    tempColumns[id]['items'] = tempColumns[id]['items'].filter(
      (column, index) => cardIndex !== index
    );

    setColumns(tempColumns);
  };

  console.log('columns', columns);

  return (
    <div>
      <div className="Kanban-header">
        <h1>
          <input
            className="editable-left"
            placeholder="Enter Kanban Name"
            value={kanbanTitle}
            onChange={({ target }) => setKanbanTitle(target.value)}
          />
          {/* #Kanban Name 1 */}
        </h1>
      </div>
      <div className="kanban-board App">
        {columns.length !== 0 ? (
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
                    contenteditable="true"
                    onChange={({ target }) => editColumnTitle(target.value, id)}
                  >
                    <input
                      className="editable-left"
                      placeholder="Enter Card Name"
                      value={column.name}
                      onChange={({ target }) =>
                        editColumnTitle(target.value, id)
                      }
                    />
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
                            {/* <button
                              type="button"
                              class="btn btn-success"
                              style={{ width: '100%' }}
                              onClick={() => addCard(id)}
                            >
                              Add
                            </button> */}
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
                                        <div className="open-card-options">
                                          <span
                                            style={{ padding: '5px' }}
                                            className="smart-buttons"
                                            data-toggle="modal"
                                            data-target="#exampleModal"
                                          >
                                            <AiOutlineExpandAlt />
                                          </span>
                                          <span {...provided.dragHandleProps}>
                                            <CgMenuGridO />
                                          </span>
                                          <span
                                            style={{ cursor: 'pointer' }}
                                            onClick={() =>
                                              deleteCard(id, index)
                                            }
                                          >
                                            <AiFillDelete />
                                          </span>
                                        </div>
                                        {/* <CardModal /> */}
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
        ) : null}
      </div>
    </div>
  );
};

export default Kanban;
