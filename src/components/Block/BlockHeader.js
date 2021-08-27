import React, { useState } from 'react';
import { MdAddCircle } from 'react-icons/md';
import { AiFillDelete } from 'react-icons/ai';
import { HiOutlineFilter } from 'react-icons/hi';
import { GrPowerReset } from 'react-icons/gr';
import FilterModal from '../Modals/FilterModal';
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
  editColumnTitle,
  addCard,
  handleBlockFilter,
  resetFilters,
}) => {
  const [isOpen, setOpen] = useState(false);

  console.log(
    'ggg',
    isOnline,
    getLocalStorage('get', 'filters') !== null,
    isOnline || getLocalStorage('get', 'filters') !== null ? false : true
  );
  return (
    <>
      {isOnline === true ? (
        getLocalStorage('get', 'filters') === null ? (
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
            onChange={({ target }) => editColumnTitle(target.value, BlockId)}
          />
          <div className="block-items-count">{column.items.length} items</div>
        </h2>
        {/* <div className="block-options">
          <div>
            <HiOutlineFilter
              onClick={() => setOpen(true)}
              data-toggle="modal"
              data-target="#exampleModal"
              data-backdrop="static"
            />
            {localStorage.getItem('filters') !== null ? (
              <GrPowerReset onClick={resetFilters} />
            ) : (
              <div></div>
            )}
          </div>
          <div>
            {isOpen ? (
              <FilterModal
                BlockId={BlockId}
                Blockindex={Blockindex}
                handleBlockFilter={handleBlockFilter}
                setOpen={setOpen}
              />
            ) : null}
          </div>
        </div> */}
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
