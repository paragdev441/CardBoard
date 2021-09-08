import React, { lazy, useState } from 'react';
import { Suspense } from 'react';
import uuid from 'uuid/v4';
import KanbanOptions from '../componentsNew/Views/KanbanOptions';

// import KanbanArea from '../components/KanbanArea';
import { getLocalStorage } from '../Helpers';
import { newKanbanData, newSingleKanabanData } from './dataSource';

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

  const [columns, setColumns] = useState(columnsFromBackend);
  const [kanbanTitle, setKanbanTitle] = useState('#Kanban Name 1');

  const [filterOptions, setFilterOptions] = useState({
    type: '',
    value: '',
    operator: '',
  });
  const [sortOptions, setSortOptions] = useState({ type: '', value: '' });
  const [blockNames, setBlockNames] = useState(
    Object.entries(columns).map(([id, column]) => {
      return { id, name: column.name, checked: true };
    })
  );

  // const onDragEnd = (result, columns, setColumns) => {
  //   if (!result.destination) return;
  //   const { source, destination } = result;
  //   let modifiedColumns;
  //   if (source.droppableId !== destination.droppableId) {
  //     const sourceColumn = columns[source.droppableId];
  //     const destColumn = columns[destination.droppableId];
  //     const sourceItems = [...sourceColumn.items];
  //     const destItems = [...destColumn.items];
  //     const [removed] = sourceItems.splice(source.index, 1);
  //     destItems.splice(destination.index, 0, removed);
  //     modifiedColumns = {
  //       ...columns,
  //       [source.droppableId]: {
  //         ...sourceColumn,
  //         items: sourceItems,
  //       },
  //       [destination.droppableId]: {
  //         ...destColumn,
  //         items: destItems,
  //       },
  //     };
  //   } else {
  //     const column = columns[source.droppableId];
  //     const copiedItems = [...column.items];
  //     const [removed] = copiedItems.splice(source.index, 1);
  //     copiedItems.splice(destination.index, 0, removed);
  //     modifiedColumns = {
  //       ...columns,
  //       [source.droppableId]: {
  //         ...column,
  //         items: copiedItems,
  //       },
  //     };
  //   }

  //   getLocalStorage('set', 'columns', modifiedColumns);
  //   setColumns(modifiedColumns);
  // };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination, draggableId } = result;
    let modifiedColumns;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      let sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const removed = sourceItems.find(
        (sourceItem) => sourceItem.id === draggableId
      );
      sourceItems = sourceItems.filter(
        (sourceItem) => sourceItem.id !== draggableId
      );
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

    // console.log('afterDrag', modifiedColumns);
    getLocalStorage('set', 'columns', modifiedColumns);
    setColumns(modifiedColumns);
  };

  const editKanabanTitle = ({ value }) => {
    getLocalStorage('set', 'kanbanTitle', value);
    setKanbanTitle(value);
  };

  const addCardBlock = (id, index) => {
    console.log('hhhhhhhhhh');
    let tempColumns = { ...columns };
    let modifiedCol = Object.entries(tempColumns);
    let idOfNewCol = uuid();
    modifiedCol.splice(index + 1, 0, [idOfNewCol, { name: '', items: [] }]);
    modifiedCol = modifiedCol.reduce((accum, [k, v]) => {
      accum[k] = v;
      return accum;
    }, {});

    let tempBlockNames = [...blockNames];
    tempBlockNames.splice(index + 1, 0, {
      id: idOfNewCol,
      name: '',
      checked: true,
    });
    console.log(tempBlockNames, 'tempBlockNames');
    setBlockNames(tempBlockNames);

    getLocalStorage('set', 'columns', modifiedCol);
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

    setBlockNames(blockNames.filter((blockName) => blockName.id !== blockId));

    getLocalStorage('set', 'columns', modifiedCol);
    setColumns(modifiedCol);
  };

  const addCard = (id) => {
    let tempColumns = { ...columns };
    tempColumns[id] = {
      ...tempColumns[id],
      items: [
        { ...newSingleKanabanData, id: uuid() },
        ...tempColumns[id]['items'],
      ],
    };

    getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  const deleteCard = (id, cardId) => {
    console.log('deleteCard', cardId);
    let tempColumns = { ...columns };
    tempColumns[id]['items'] = tempColumns[id]['items'].filter(
      (card) => card.id !== cardId
    );

    getLocalStorage('set', 'columns', tempColumns);
    setColumns(tempColumns);
  };

  const genericHandleChange = (
    value,
    blockId,
    key,
    type,
    itemIndex = null,
    cardId
  ) => {
    // console.log('edit', { value, blockId, key, type, itemIndex });
    switch (type) {
      case 'blockTitle':
        setColumns({
          ...columns,
          [blockId]: { ...columns[blockId], [key]: value },
        });
        setBlockNames(
          blockNames.map((blockName) => {
            if (blockName.id === blockId) {
              blockName.name = value;
            }

            return blockName;
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

  const handleBlockFilter = (type, value, operator) => {
    // console.log('type', type);
    setFilterOptions({ type, value, operator });
  };

  const handleSort = (type, value) => {
    // console.log('type', type);
    setSortOptions({ type, value });
  };

  const resetOptions = (optionType) => {
    switch (optionType) {
      case 'filter':
        setFilterOptions({ type: '', value: '' });
        break;
      case 'sort':
        setSortOptions({ type: '', value: '' });
        break;
      default:
        return;
    }
    // console.log('hit');
    // setFilterOptions({ type: '', value: '' });
    // setSortOptions({ type: '', value: '' });
    // localStorage.removeItem('filters');
  };

  const handleBlockHiding = (modifiedBlockNames) => {
    // console.log('modifiedBlockNames', modifiedBlockNames);
    setBlockNames(modifiedBlockNames);
  };

  console.log('filterOptions', filterOptions);

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
        filterOptions={filterOptions}
        sortOptions={sortOptions}
        blockNames={blockNames}
        handleBlockFilter={handleBlockFilter}
        handleSort={handleSort}
        handleBlockHiding={handleBlockHiding}
        resetOptions={resetOptions}
      />
      <div className="kanban-board App">
        {columns.length !== 0 ? (
          <Suspense fallback={<div>Loading...</div>}>
            <KanbanArea
              columns={columns}
              filterOptions={filterOptions}
              sortOptions={sortOptions}
              blockNames={blockNames}
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
