import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { AiFillDelete } from 'react-icons/ai';

const CardHeader = ({ blockId, index, provided, setOpen, deleteCard }) => {
  return (
    <div className="open-card-options" onClick={() => setOpen(true)}>
      <span
        style={{ padding: '5px' }}
        className="smart-buttons"
        data-toggle="modal"
        data-backdrop="static"
        data-target={`#cardModal${index}${blockId}`}
      >
        <AiOutlineExpandAlt />
      </span>
      <span {...provided.dragHandleProps}>
        <CgMenuGridO />
      </span>
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
