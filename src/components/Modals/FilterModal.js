import React, { useEffect, useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';

const FilterModal = ({ BlockId, Blockindex, handleBlockFilter, setOpen }) => {
  const [formData, setFormData] = useState({ field: '', fieldValue: '' });
  const [, forceUpdate] = useState();
  const validator = useRef(new SimpleReactValidator());

  useEffect(() => {
    setFormData({ field: '', fieldValue: '' });
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(false);
    handleBlockFilter({ formData, Blockindex, BlockId });
  };

  return (
    <div
      className="modal fade"
      style={{ textAlign: 'left' }}
      id="exampleModal"
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
            >
              <span aria-hidden="true">×</span>
            </button>
            <h4 className="modal-title">Apply Filters</h4>
          </div>
          <div className="modal-body">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-5">
                    <label htmlFor="inputState">Field</label>
                    <select
                      class="form-control"
                      id="inputState"
                      value={formData.field}
                      onChange={({ target }) =>
                        setFormData({ ...formData, field: target.value })
                      }
                    >
                      <option value="" selected>
                        Choose...
                      </option>
                      <option value="assignedTo">Assigned to</option>
                      <option value="status">User Status</option>
                      <option value="description">Description</option>
                      <option value="tags">Tags</option>
                    </select>
                    {validator.current.message(
                      'field',
                      formData.field,
                      'required',
                      {
                        className: 'text-danger',
                      }
                    )}
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Field Value</label>
                    <input
                      type="text"
                      className="form-control"
                      id="inputZip"
                      value={formData.fieldValue}
                      onChange={({ target }) =>
                        setFormData({ ...formData, fieldValue: target.value })
                      }
                    />
                    {validator.current.message(
                      'field value',
                      formData.fieldValue,
                      'required',
                      {
                        className: 'text-danger',
                      }
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-default"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterModal;
