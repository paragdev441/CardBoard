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
  console.log('callingArr', callingArr.length);
  return (
    <>
      <div className="open-options">
        {callingArr.length < 6 ? (
          <div onClick={() => addCardBlock(BlockId, Blockindex)}>
            <GrAddCircle />
          </div>
        ) : (
          <div style={{ marginTop: '1.4em' }}>{/* <GrAddCircle /> */}</div>
        )}
        {callingArr.length > 1 ? (
          <div onClick={() => deleteCardBlock(BlockId, Blockindex)}>
            <AiFillDelete />
          </div>
        ) : (
          <div style={{ marginTop: '1.4em' }}>{/* <GrAddCircle /> */}</div>
        )}
      </div>
      <h2 className="board-title">
        <input
          className="editable-left"
          placeholder="Enter Card Name"
          value={column.name}
          onChange={({ target }) => editColumnTitle(target.value, BlockId)}
        />
        <div className="block-items-count">{column.items.length} items</div>
      </h2>
      <button
        type="button"
        class="btn btn-success"
        style={{ width: '100%', borderBottom: '3px solid green' }}
        onClick={() => addCard(BlockId)}
      >
        Add Card
      </button>
    </>
  );
};

export default BlockHeader;
