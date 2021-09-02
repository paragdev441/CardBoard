import React, { lazy, useState } from 'react';
import { Suspense } from 'react';
import uuid from 'uuid/v4';
import KanbanOptions from '../componentsNew/Views/KanbanOptions';

// import KanbanArea from '../components/KanbanArea';
import { getLocalStorage } from '../Helpers';
import { newKanbanData, singleKanabanData } from './dataSource';

const KanbanArea = lazy(() => import('../componentsNew/Views/KanbanArea'));

/**
 * Container for showing Kanban
 * @returns  ReactElement
 */
const KanbanNew = () => {
  /**
   * Kanban column's data
   */
  const columnsFromBackend = {
    [uuid()]: {
      name: 'Todo',
      items: newKanbanData,
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

  const [filterOptions, setFilterOptions] = useState({ type: '', value: '' });

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

  const deleteCard = (id, cardIndex) => {
    let tempColumns = { ...columns };
    tempColumns[id]['items'] = tempColumns[id]['items'].filter(
      (column, index) => cardIndex !== index
    );

    getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  const genericHandleChange = (value, blockId, key, type, itemIndex = null) => {
    switch (type) {
      case 'blockTitle':
        setColumns({
          ...columns,
          [blockId]: { ...columns[blockId], [key]: value },
        });
        break;
      case 'cardBody':
        setColumns({
          ...columns,
          [blockId]: {
            ...columns[blockId],
            items: columns[blockId].items.map((item, index) => {
              if (itemIndex === index) {
                return {
                  ...item,
                  [key]: value,
                };
              } else {
                return item;
              }
            }),
          },
        });
      default:
        return;
    }
  };

  const handleBlockFilter = (type, value) => {
    console.log('type', type);
    setFilterOptions({ type, value });
  };

  const resetFilters = () => {
    console.log('hit');
    getLocalStorage('set', 'columns', getLocalStorage('get', 'backupColumns'));
    setColumns(getLocalStorage('get', 'backupColumns'));
    localStorage.removeItem('filters');
    localStorage.removeItem('backupColumns');
  };

  console.log('newKanbanData', filterOptions);

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
      <KanbanOptions
        handleBlockFilter={handleBlockFilter}
        resetFilters={resetFilters}
      />
      <div className="kanban-board App">
        {columns.length !== 0 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <KanbanArea
              columns={columns}
              filterOptions={filterOptions}
              setColumns={setColumns}
              onDragEnd={onDragEnd}
              addCardBlock={addCardBlock}
              deleteCardBlock={deleteCardBlock}
              addCard={addCard}
              deleteCard={deleteCard}
              genericHandleChange={genericHandleChange}
            />
          </Suspense>
        ) : // <KanbanGroupByName />
        null}
      </div>
    </div>
  );
};

export default KanbanNew;
