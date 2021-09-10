import React, { useEffect, useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
// import { getLocalStorage } from '../../Helpers';

const SortModal = ({ sortOptions, handleSort, resetOptions, setOpen }) => {
  const { type: field, value: operator } = sortOptions;
  const [formData, setFormData] = useState({ field, operator });
  // const [formData, setFormData] = useState(
  //   localStorage.getItem('sort') !== null
  //     ? getLocalStorage('get', 'sort')
  //     : getLocalStorage('set', 'sort', { field, operator })
  // );
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: 'This field is required', // will override all messages
      },
    })
  );

  useEffect(() => {
    return () => {};
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      handleSort(formData.field, formData.operator);
      setOpen(false);
      document.getElementsByClassName('close')[0].click();
      document.getElementsByClassName('modal-backdrop fade in')[0].remove();
      document.body.classList.remove('modal-open');
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };

  const handleChange = (value, key) => {
    setFormData({ ...formData, [key]: value });
    // getLocalStorage('set', 'sort', { ...formData, [key]: value });
  };

  const handleReset = () => {
    setFormData({ field: '', operator: '' });
    // getLocalStorage('set', 'sort', { field: '', operator: '' });
    resetOptions('sort');
  };

  return (
    <div
      className="modal fade"
      style={{ textAlign: 'left' }}
      id="sortModal"
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
            <h4 className="modal-title">Apply Sorting</h4>
          </div>
          <div className="modal-body">
            <div>
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group col-md-5">
                    <label htmlFor="inputState">Field</label>
                    <select
                      class="form-control select-option-field"
                      id="inputState"
                      value={formData.field}
                      onChange={({ target }) =>
                        handleChange(target.value, 'field')
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
                      'sortField',
                      formData.field,
                      'required',
                      {
                        className: 'text-danger',
                      }
                    )}
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputState">Operator</label>
                    <select
                      class="form-control select-option-field"
                      id="inputState"
                      value={formData.operator}
                      onChange={({ target }) =>
                        handleChange(target.value, 'operator')
                      }
                    >
                      <option value="" selected>
                        Choose...
                      </option>
                      <option value="asc">A to Z</option>
                      <option value="desc">Z to A</option>
                    </select>
                    {validator.current.message(
                      'operator',
                      formData.operator,
                      'required',
                      {
                        className: 'text-danger',
                      }
                    )}
                  </div>
                </div>
                <div className="modal-footer">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>
                      <button
                        type="button"
                        class="btn btn-default"
                        onClick={handleReset}
                        disabled={
                          formData.field === '' || formData.operator === ''
                            ? true
                            : false
                        }
                        // disabled={
                        //   JSON.parse(localStorage.getItem('sort')).field ===
                        //     '' ||
                        //   JSON.parse(localStorage.getItem('sort')).operator ===
                        //     ''
                        //     ? true
                        //     : false
                        // }
                      >
                        Remove all
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                        onClick={() => setOpen(false)}
                      >
                        Close
                      </button>
                      <button type="submit" className="btn btn-primary">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SortModal;
