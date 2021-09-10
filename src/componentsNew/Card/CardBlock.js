import React from 'react';
// import { getLocalStorage } from '../../Helpers';

/**
 * Renders layout of body of each Kanban block's card
 * @param {*} param0
 * @returns ReactElement
 */
const CardBlock = ({
  uuid: BlockId,
  index,
  item: { id, imgURL, title, description, threads, pending },
  genericHandleChange,
}) => {
  return (
    <div key={id}>
      <div className="block-body">
        <div className="card kanban-card">
          <div className="card-header">
            <img src={imgURL} alt="avatar" />
            <h4>
              <input
                className="editable-left"
                placeholder="Enter Card Name"
                defaultValue={title}
                onChange={({ target }) =>
                  genericHandleChange(
                    target.value,
                    BlockId,
                    'title',
                    'cardBody',
                    index,
                    id
                  )
                }
              />
            </h4>
            <div>
              <input
                className="editable-left editable-description"
                placeholder="Enter Summary"
                defaultValue={description}
                onChange={({ target }) =>
                  genericHandleChange(
                    target.value,
                    BlockId,
                    'description',
                    'cardBody',
                    index,
                    id
                  )
                }
              />
            </div>
            <ul style={{ textAlign: 'left' }}>
              <li>{threads} threads</li>
              <li>{pending} pending</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
