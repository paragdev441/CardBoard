import React, { lazy, useState } from 'react';
import { Suspense } from 'react';
import uuid from 'uuid/v4';
import KanbanOptions from '../componentsNew/Views/KanbanOptions';

// import KanbanArea from '../components/KanbanArea';
// import { getLocalStorage } from '../Helpers';
import { newKanbanData, newSingleKanabanData } from './dataSource';

const KanbanArea = lazy(() => import('../componentsNew/Views/KanbanArea'));

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
      items: newKanbanData,
      toggle: false,
    },
    [uuid()]: {
      name: 'Progress',
      items: [],
      toggle: false,
    },
  };

  const [columns, setColumns] = useState(columnsFromBackend);
  const [kanbanTitle, setKanbanTitle] = useState('#Kanban Name 1');

  const [filterOptions, setFilterOptions] = useState({
    field: '',
    operator: '',
    fieldValue: '',
  });
  const [sortOptions, setSortOptions] = useState({ field: '', operator: '' });
  const [blockOptions, setBlockOptions] = useState(
    Object.entries(columns).map(([id, column]) => {
      return { id, name: column.name, checked: true };
    })
  );

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
    let modifiedColumns;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      let sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const removed = sourceItems.find(sourceItem => sourceItem.id === draggableId);
      sourceItems = sourceItems.filter(sourceItem => sourceItem.id !== draggableId);
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

    // getLocalStorage('set', 'columns', modifiedColumns);
    setColumns(modifiedColumns);
  };

  const editKanabanTitle = ({ value }) => {
    // getLocalStorage('set', 'kanbanTitle', value);
    setKanbanTitle(value);
  };

  const addCardBlock = (id, index) => {
    // console.log('hhhhhhhhhh');
    let tempColumns = { ...columns };
    let modifiedCol = Object.entries(tempColumns);
    let idOfNewCol = uuid();
    modifiedCol.splice(index + 1, 0, [idOfNewCol, { name: '', items: [] }]);
    modifiedCol = modifiedCol.reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

    let tempBlockOptions = [...blockOptions];
    tempBlockOptions.splice(index + 1, 0, {
      id: idOfNewCol,
      name: '',
      checked: true,
    });
    // console.log(tempBlockOptions, 'tempBlockOptions');
    setBlockOptions(tempBlockOptions);

    // getLocalStorage('set', 'columns', modifiedCol);
    setColumns(modifiedCol);
  };

  const deleteCardBlock = (blockId, index) => {
    let tempColumns = { ...columns };
    let modifiedCol = Object.entries(tempColumns);
    modifiedCol.splice(index, 1);
    modifiedCol = modifiedCol.reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

    setBlockOptions(blockOptions.filter(blockOption => blockOption.id !== blockId));

    // getLocalStorage('set', 'columns', modifiedCol);
    setColumns(modifiedCol);
  };

  const addCard = id => {
    let tempColumns = { ...columns };
    tempColumns[id] = {
      ...tempColumns[id],
      items: [{ ...newSingleKanabanData, id: uuid() }, ...tempColumns[id]['items']],
    };

    // getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  const deleteCard = (id, cardId) => {
    // console.log('deleteCard', cardId);
    let tempColumns = { ...columns };
    tempColumns[id]['items'] = tempColumns[id]['items'].filter(card => card.id !== cardId);

    // getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  const genericHandleChange = (value, blockId, key, type, itemIndex = null, cardId) => {
    // console.log('edit', { value, blockId, key, type, itemIndex });
    switch (type) {
      case 'blockTitle':
        setColumns({
          ...columns,
          [blockId]: { ...columns[blockId], [key]: value },
        });
        setBlockOptions(
          blockOptions.map(blockOption => {
            if (blockOption.id === blockId) {
              blockOption.name = value;
            }

            return blockOption;
          })
        );
        break;
      case 'cardBody':
        setColumns({
          ...columns,
          [blockId]: {
            ...columns[blockId],
            items: columns[blockId].items.map((item, index) => {
              if (cardId === item.id) {
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
        break;
      default:
        return;
    }
  };

  const handleBlockFilter = (field, operator, fieldValue) => {
    // console.log('type', type);
    setFilterOptions({ field, operator, fieldValue });
  };

  const handleSort = (field, operator) => {
    // console.log('type', type);
    setSortOptions({ field, operator });
  };

  const resetOptions = optionType => {
    switch (optionType) {
      case 'filter':
        setFilterOptions({ field: '', operator: '', fieldValue: '' });
        break;
      case 'sort':
        setSortOptions({ field: '', operator: '' });
        break;
      default:
        return;
    }
    // console.log('hit');
    // setFilterOptions({ type: '', value: '' });
    // setSortOptions({ type: '', value: '' });
    // localStorage.removeItem('filters');
  };

  const handleBlockHiding = modifiedBlockOptions => {
    // console.log('modifiedBlockNames', modifiedBlockNames);
    setBlockOptions(modifiedBlockOptions);
  };

  const handleToogle = (isToggle, id) => {
    let tempColumns = { ...columns };
    tempColumns[id].toggle = isToggle;
    setColumns(tempColumns);
  };

  return (
    <div className="kanban">
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
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        blockOptions={blockOptions}
        handleBlockFilter={handleBlockFilter}
        handleSort={handleSort}
        handleBlockHiding={handleBlockHiding}
        resetOptions={resetOptions}
      />
      <div className="kanban-area">
        <div className="kanban-board App">
          {columns.length !== 0 ? (
            <Suspense fallback={<div>Loading...</div>}>
              <KanbanArea
                columns={columns}
                filterOptions={filterOptions}
                sortOptions={sortOptions}
                blockOptions={blockOptions}
                setColumns={setColumns}
                onDragEnd={onDragEnd}
                addCardBlock={addCardBlock}
                deleteCardBlock={deleteCardBlock}
                addCard={addCard}
                deleteCard={deleteCard}
                genericHandleChange={genericHandleChange}
                handleToogle={handleToogle}
              />
            </Suspense>
          ) : // <KanbanGroupByName />
          null}
        </div>
      </div>
    </div>
  );
};

export default Kanban;
