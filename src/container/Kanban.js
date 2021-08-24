import React, { lazy, useState } from 'react';
import { Suspense } from 'react';
import uuid from 'uuid/v4';

// import KanbanArea from '../components/KanbanArea';
import { getLocalStorage } from '../Helpers';
import { kanbanData, singleKanabanData } from './dataSource';

const KanbanArea = lazy(() => import('../components/KanbanArea'));

/**
 * Container for showing Kanban
 * @returns  ReactElement
 */
const Kanban = () => {
  /**
   * Kanban column's data
   */
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

  /**
   * Called after dragging has been complete
   * @param {object} result
   * @param {object} columns
   * @param {Method} setColumns
   * @returns
   */
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

  /**
   * Handling changed value of kanbanTitle at React State as well as localstorage
   * @param {object} target
   */
  const editKanabanTitle = ({ value }) => {
    getLocalStorage('set', 'kanbanTitle', value);
    setKanbanTitle(value);
  };

  /**
   * Handles adding new card block in kanaban area
   * @param {string} id
   * @param {number} index
   */
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

  /**
   * Handles editing title of each kanban block w.r.t block index
   * @param {string} value
   * @param {string} id
   */
  const editColumnTitle = (value, id) => {
    let tempColumns = { ...columns };
    tempColumns = { ...tempColumns, [id]: { ...tempColumns[id], name: value } };

    getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  /**
   * Handles deleteing each kanban block based w.r.t block index
   * (Object is converted to array for rendering.
   * See the return function of Kanban Area)
   * @param {string} id
   * @param {number} index
   */
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

  /**
   * Adding Card w.r.t to Block id.
   * @param {index} id
   */
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

  /**
   * Editing card w.r.t to column id & column's item's item's
   * @param {object} e
   * @param {string} type: Name of property of columns's itemss' items'(first item is array & second item is its element)
   * @param {string} blockId: Id of kanaban block
   * @param {index} index: index of columns's items'
   * @returns
   */
  const handleChange = (e, type, blockId, index) => {
    let tempColumns = { ...columns };
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

  /**
   * Deleting card w.r.t cardIndex
   * @param {string} id
   * @param {number} cardIndex
   */
  const deleteCard = (id, cardIndex) => {
    let tempColumns = { ...columns };
    tempColumns[id]['items'] = tempColumns[id]['items'].filter(
      (column, index) => cardIndex !== index
    );

    getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  /**
   * Editing card using Modal w.r.t to data available in formData
   * @param {object} formData
   */
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

  return (
    <div>
      <div className="Kanban-header">
        <h1 style={{ marginLeft: '5px' }}>
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
          <Suspense fallback={<div>Loading...</div>}>
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
          </Suspense>
        ) : null}
      </div>
    </div>
  );
};

export default Kanban;
