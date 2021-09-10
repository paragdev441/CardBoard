import React, { useState } from 'react';
import handleColumnsHiding from '../../helpers/handleColumnsHiding';

const HideFieldsModal = ({ blockOptions, handleBlockHiding, setOpen }) => {
  /**
   * Contains all the block names.
   * This read-only & can never be changed.
   */
  // const blockNames = [
  //   { name: 'Todo', checked: false },
  //   { name: 'Progress', checked: false },
  // ];

  // console.log('blockNames', blockNames);

  const [blockTitles, setBlockTitles] = useState(blockOptions);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (checked, id) => {
    let tempBlockTitles = blockTitles.map((blockTitle) => {
      if (blockTitle.id === id) {
        blockTitle.checked = checked;
      }

      return blockTitle;
    });
    setBlockTitles(tempBlockTitles);
    handleBlockHiding(tempBlockTitles);
  };

  const handleOptions = (type) => {
    switch (type) {
      case 'hide':
        handleBlockHiding(handleColumnsHiding(blockTitles, false));
        break;
      case 'show':
        handleBlockHiding(handleColumnsHiding(blockTitles, true));
        break;
      default:
        return;
    }
  };

  return (
    <div
      className="modal fade"
      style={{ textAlign: 'left' }}
      id="hideFields"
      tabIndex={-1}
      role="dialog"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={() => setOpen(false)}
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title">Hide Fields</h4>
          </div>
          <div className="modal-body">
            <div>
              <input
                type="text"
                className="form-control"
                placeholder="Search for a Field"
                onChange={({ target }) => setSearchQuery(target.value)}
              />
              {blockTitles.filter(({ name }) =>
                name
                  .toLocaleLowerCase()
                  .includes(searchQuery.toLocaleLowerCase())
              ).length === 0 ? (
                <div>No fields found</div>
              ) : (
                blockTitles
                  .filter(({ name }) =>
                    name
                      .toLocaleLowerCase()
                      .includes(searchQuery.toLocaleLowerCase())
                  )
                  .map(({ id, name, checked }, index) => {
                    return (
                      <div
                        key={id}
                        className="checkbox checkbox-slider--b-flat"
                      >
                        <label>
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={({ target }) =>
                              handleChange(target.checked, id)
                            }
                          />
                          <span>{name}</span>
                        </label>
                      </div>
                    );
                  })
              )}
              <div className="hide-block-buttons">
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => handleOptions('hide')}
                >
                  Hide All
                </button>
                <button
                  type="button"
                  className="btn btn-default"
                  onClick={() => handleOptions('show')}
                >
                  Show All
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HideFieldsModal;
