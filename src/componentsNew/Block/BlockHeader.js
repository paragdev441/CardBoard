import React from 'react';
import { MdAddCircle } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { getLocalStorage } from '../../Helpers';
/**
 * Renders layout of header of each Kanban block
 * @param {*} param0
 * @returns ReactElement
 */
const BlockHeader = ({
  BlockId,
  Blockindex,
  callingArr,
  column,
  isOnline,
  addCardBlock,
  deleteCardBlock,
  genericHandleChange,
  addCard,
}) => {
  const isDisabled =
    getLocalStorage('get', 'backupColumns') !== null ? true : false;

  return (
    <>
      {isOnline === true ? (
        getLocalStorage('get', 'backupColumns') === null ? (
          <div className="open-options">
            {callingArr.length < 6 ? (
              <div
                style={{ paddingBottom: '5px' }}
                onClick={() => addCardBlock(BlockId, Blockindex)}
              >
                <MdAddCircle />
              </div>
            ) : (
              <div style={{ marginTop: '1.4em' }}>{/* <GrAddCircle /> */}</div>
            )}
            {callingArr.length > 1 ? (
              <div
                style={{ paddingBottom: '5px' }}
                onClick={() => deleteCardBlock(BlockId, Blockindex)}
              >
                <AiFillDelete />
              </div>
            ) : (
              <div style={{ marginTop: '1.4em' }}>{/* <GrAddCircle /> */}</div>
            )}
          </div>
        ) : (
          <div style={{ marginTop: '50px' }} className="open-options"></div>
        )
      ) : (
        <div style={{ marginTop: '50px' }} className="open-options"></div>
      )}
      <div style={{ display: 'flex' }}>
        <h2 className="board-title">
          <input
            className="editable-left"
            placeholder="Enter Card Name"
            value={column.name}
            onChange={({ target }) =>
              genericHandleChange(target.value, BlockId, 'name', 'blockTitle')
            }
            disabled={isDisabled}
          />
          <div className="block-items-count">{column.items.length} items</div>
        </h2>
      </div>
      <button
        type="button"
        className="btn btn-success add-card-button"
        onClick={() => addCard(BlockId)}
        disabled={
          isOnline === true
            ? getLocalStorage('get', 'backupColumns') === null
              ? false
              : true
            : true
        }
      >
        Add Card
      </button>
    </>
  );
};

export default BlockHeader;

// !online;
