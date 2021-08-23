import React from 'react';
// import { CgMenuGridO } from 'react-icons/cg';
import { CgArrowsExpandRight } from 'react-icons/cg';
import { AiFillDelete } from 'react-icons/ai';

/**
 * Renders layout of header of each Kanban block's card
 * @param {*} param0
 * @returns ReactElement
 */
const CardHeader = ({ blockId, index, setOpen, deleteCard }) => {
  return (
    <div className="open-card-options" onClick={() => setOpen(true)}>
      <span
        style={{ padding: '5px' }}
        className="smart-buttons"
        data-toggle="modal"
        data-backdrop="static"
        data-target={`#cardModal${index}${blockId}`}
      >
        <CgArrowsExpandRight />
      </span>
      {/* <span
      // {...provided.dragHandleProps}
      >
        <CgMenuGridO />
      </span> */}
      <span
        style={{ cursor: 'pointer' }}
        onClick={() => deleteCard(blockId, index)}
      >
        <AiFillDelete />
      </span>
    </div>
  );
};

export default CardHeader;
