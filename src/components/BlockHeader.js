import React, { useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';

const BlockHeader = ({
  BlockId,
  Blockindex,
  callingArr,
  column,
  addCardBlock,
  deleteCardBlock,
  editColumnTitle,
  addCard,
}) => {
  return (
    <>
      <div className="open-options">
        <div onClick={() => addCardBlock(BlockId, Blockindex)}>
          <GrAddCircle />
        </div>
        {callingArr.length > 1 ? (
          <div onClick={() => deleteCardBlock(BlockId, Blockindex)}>
            <AiFillDelete />
          </div>
        ) : null}
      </div>
      <h2 className="board-title">
        <input
          className="editable-left"
          placeholder="Enter Card Name"
          value={column.name}
          onChange={({ target }) => editColumnTitle(target.value, BlockId)}
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
      </h2>
      <button
        type="button"
        class="btn btn-success"
        style={{ width: '100%', borderBottom: '3px solid green' }}
        onClick={() => addCard(BlockId)}
      >
        Add
      </button>
    </>
  );
};

export default BlockHeader;
