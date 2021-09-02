import React from 'react';
import { getLocalStorage } from '../../Helpers';

/**
 * Renders layout of body of each Kanban block's card
 * @param {*} param0
 * @returns ReactElement
 */
const CardBlock = ({
  uuid: BlockId,
  index,
  item: { imgURL, title, description, threads, pending },
  handleChange,
  genericHandleChange,
}) => {
  // console.log('GGG', { imgURL, title, description, threads, pending });
  const isDisabled =
    getLocalStorage('get', 'backupColumns') !== null ? true : false;

  return (
    <div>
      <div className="block-body">
        <div className="card kanban-card">
          <div className="card-header">
            <img src={imgURL} alt="avatar" />
            <h4>
              <input
                className="editable-left"
                placeholder="Enter Card Name"
                value={title}
                disabled={isDisabled}
                onChange={({ target }) =>
                  genericHandleChange(
                    target.value,
                    BlockId,
                    'title',
                    'cardBody',
                    index
                  )
                }
              />
            </h4>
            <div>
              <input
                className="editable-left editable-description"
                placeholder="Enter Summary"
                value={description}
                disabled={isDisabled}
                onChange={({ target }) =>
                  genericHandleChange(
                    target.value,
                    BlockId,
                    'description',
                    'cardBody',
                    index
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
