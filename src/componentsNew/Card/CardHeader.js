import React from 'react';
import { CgMenuGridO } from 'react-icons/cg';
import { CgArrowsExpandRight } from 'react-icons/cg';
import { AiFillDelete } from 'react-icons/ai';
import { getLocalStorage } from '../../Helpers';

/**
 * Renders layout of header of each Kanban block's card
 * @param {*} param0
 * @returns ReactElement
 */
const CardHeader = ({
  blockId,
  item,
  index,
  provided,
  isOnline,
  setOpen,
  deleteCard,
}) => {
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
      <span
        style={{
          display: true
            ? getLocalStorage('get', 'backupColumns') === null
              ? 'block'
              : 'none'
            : 'none',
          padding: '5px',
        }}
        {...provided.dragHandleProps}
      >
        <CgMenuGridO />
      </span>
      <span
        style={{
          display:
            isOnline === true
              ? getLocalStorage('get', 'backupColumns') === null
                ? 'block'
                : 'none'
              : 'none',
          cursor: 'pointer',
          padding: '5px',
        }}
        onClick={() => deleteCard(blockId, item.id)}
      >
        <AiFillDelete />
      </span>
    </div>
  );
};

export default CardHeader;
