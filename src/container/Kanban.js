import React, { useState } from 'react';
import uuid from 'uuid/v4';

import KanbanArea from '../components/KanbanArea';
import { getLocalStorage } from '../Helpers';
import { kanbanData, singleKanabanData } from './dataSource';

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

  // console.log('condition', columnsFromBackend);

  const [columns, setColumns] = useState(
    localStorage.getItem('columns') !== null
      ? getLocalStorage('get', 'columns')
      : getLocalStorage('set', 'columns', columnsFromBackend)
  );
  const [kanbanTitle, setKanbanTitle] = useState(
    localStorage.getItem('kanbanTitle') !== null
      ? getLocalStorage('get', 'kanbanTitle')
      : getLocalStorage('set', 'kanbanTitle', '#Kanban Name 1')
  );

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
    let modifiedColumns;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      modifiedColumns = {
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      };
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      modifiedColumns = {
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      };
    }

    getLocalStorage('set', 'columns', modifiedColumns);
    setColumns(modifiedColumns);
  };

  const editKanabanTitle = ({ value }) => {
    getLocalStorage('set', 'kanbanTitle', value);
    setKanbanTitle(value);
  };

  const addCardBlock = (id, index) => {
    let tempColumns = { ...columns };
    let modifiedCol = Object.entries(tempColumns);
    modifiedCol.splice(index + 1, 0, [uuid(), { name: '', items: [] }]);
    modifiedCol = modifiedCol.reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

    getLocalStorage('set', 'columns', modifiedCol);
    setColumns(modifiedCol);
  };

  const editColumnTitle = (value, id) => {
    console.log('value', value);
    let tempColumns = { ...columns };
    tempColumns = { ...tempColumns, [id]: { ...tempColumns[id], name: value } };

    getLocalStorage('set', 'columns', tempColumns);
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

    getLocalStorage('set', 'columns', modifiedCol);
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

    getLocalStorage('set', 'columns', tempColumns);
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

    getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  const deleteCard = (id, cardIndex) => {
    let tempColumns = { ...columns };
    tempColumns[id]['items'] = tempColumns[id]['items'].filter(
      (column, index) => cardIndex !== index
    );

    getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  const handleEditFormSubmit = (formData) => {
    const {
      uuid,
      itemIndex,
      data: { email, phone, tasks },
    } = formData;
    let tempColumns = { ...columns };
    tempColumns[uuid]['items'][itemIndex]['profile']['email'] = email;
    tempColumns[uuid]['items'][itemIndex]['profile']['phone'] = phone;
    tempColumns[uuid]['items'][itemIndex]['data']['tasks'] = [...tasks];

    getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  // console.log('columns', columns);

  return (
    <div>
      <div className="Kanban-header">
        <h1>
          <input
            className="editable-left"
            placeholder="Enter Kanban Name"
            value={kanbanTitle}
            onChange={({ target }) => editKanabanTitle(target)}
          />
          {/* #Kanban Name 1 */}
        </h1>
      </div>
      <div className="kanban-board App">
        {columns.length !== 0 ? (
          <KanbanArea
            columns={columns}
            setColumns={setColumns}
            onDragEnd={onDragEnd}
            addCardBlock={addCardBlock}
            deleteCardBlock={deleteCardBlock}
            editColumnTitle={editColumnTitle}
            addCard={addCard}
            deleteCard={deleteCard}
            handleChange={handleChange}
            handleEditFormSubmit={handleEditFormSubmit}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Kanban;
