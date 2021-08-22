import React, { Suspense } from 'react';
import { useImage } from 'react-image';

/**
 * Renders layout of body of each Kanban block's card
 * @param {*} param0
 * @returns ReactElement
 */
const CardBlock = ({ uuid, index, item: { profile, data }, handleChange }) => {
  const Img = ({ imgURL }) => {
    const { src } = useImage({
      srcList: imgURL,
    });

    return <img src={src} alt="avatar" />;
  };

  return (
    <div>
      <div className="block-body">
        <div className="card kanban-card">
          <div className="card-header">
            <Suspense fallback={<div className="loader"></div>}>
              <img src={profile.imgURL} alt="avatar" />
            </Suspense>
            <h4>
              <input
                className="editable-left"
                placeholder="Enter Card Name"
                value={profile.name}
                onChange={(e) => handleChange(e, 'name', uuid, index)}
              />
            </h4>
            <div>
              <input
                className="editable-left"
                placeholder="Enter Summary"
                value={data.shortMessage}
                onChange={(e) => handleChange(e, 'shortMessage', uuid, index)}
              />
            </div>
            <ul style={{ textAlign: 'left' }}>
              <li>
                <input
                  type="number"
                  min={0}
                  className="editable-number"
                  value={data.threads}
                  onChange={(e) => handleChange(e, 'threads', uuid, index)}
                />{' '}
                Threads
              </li>
              <li>
                <input
                  type="number"
                  min={0}
                  className="editable-number"
                  value={data.pending}
                  onChange={(e) => handleChange(e, 'pending', uuid, index)}
                />{' '}
                Pending Task
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBlock;
