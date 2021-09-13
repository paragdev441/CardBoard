import React, { useEffect, useRef, useState } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import { statusList, tagList } from '../../container/dataSource';
// import { getLocalStorage } from '../../Helpers';

const FilterModal = ({
  filterOptions,
  handleBlockFilter,
  resetOptions,
  setOpen,
}) => {
  const [formData, setFormData] = useState(filterOptions);
  const { field, operator, fieldValue } = formData;
  // const [formData, setFormData] = useState(
  //   localStorage.getItem('filters') !== null
  //     ? getLocalStorage('get', 'filters')
  //     : getLocalStorage('set', 'filters', { field, operator, fieldValue })
  // );
  const [, forceUpdate] = useState();
  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: 'This field is required', // will override all messages
      },
    })
  );
  const operators = [
    'contains',
    'does not contain',
    'Is',
    'Is Not',
    'Starts with',
    'Ends with',
    'Is Empty',
    'Is Not Empty',
  ];

  useEffect(() => {
    return () => {};
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validator.current.allValid() ||
      operator === 'is empty' ||
      operator === 'is not empty'
    ) {
      handleBlockFilter(field, operator, fieldValue);
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
    if (key === 'field') {
      setFormData({ ...formData, [key]: value, operator: '', fieldValue: '' });
    } else {
      setFormData({ ...formData, [key]: value });
    }
    // getLocalStorage('set', 'filters', { ...formData, [key]: value });
  };

  const handleFilters = () => {
    setFormData({ field: '', fieldValue: '', operator: '' });
    // getLocalStorage('set', 'filters', { field: '', fieldValue: '' });
    resetOptions('filter');
  };

  const renderFieldValue = (field) => {
    switch (field) {
      case 'status':
        return (
          <select
            className="form-control select-option-field"
            id="inputState"
            value={fieldValue}
            onChange={({ target }) => handleChange(target.value, 'fieldValue')}
          >
            <option value="" disabled>
              Choose...
            </option>
            {statusList.map((status, index) => (
              <option key={index} value={status}>
                {status}
              </option>
            ))}
          </select>
        );
      case 'tags':
        return (
          <select
            className="form-control select-option-field"
            id="inputState"
            value={fieldValue}
            onChange={({ target }) => handleChange(target.value, 'fieldValue')}
          >
            <option value="" disabled>
              Choose...
            </option>
            {tagList.map((tag, index) => (
              <option key={index} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="Enter the field value"
            value={fieldValue}
            onChange={({ target }) => handleChange(target.value, 'fieldValue')}
          />
        );
    }
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
              onClick={() => setOpen(false)}
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
                      className="form-control select-option-field"
                      id="inputState"
                      value={field}
                      onChange={({ target }) =>
                        handleChange(target.value, 'field')
                      }
                    >
                      <option value="" disabled>
                        Choose...
                      </option>
                      <option value="assignedTo">Assigned to</option>
                      <option value="status">User Status</option>
                      <option value="description">Description</option>
                      <option value="tags">Tags</option>
                    </select>
                    {validator.current.message('filterkey', field, 'required', {
                      className: 'text-danger',
                    })}
                  </div>
                  <div className="form-group col-md-2">
                    <label htmlFor="inputState">Operator</label>
                    <select
                      className="form-control select-option-field"
                      id="inputState"
                      value={operator}
                      onChange={({ target }) =>
                        handleChange(target.value, 'operator')
                      }
                    >
                      <option value="" disabled>
                        Choose...
                      </option>
                      {operators
                        .filter((value) =>
                          (value === 'contains' ||
                            value === 'does not contain' ||
                            value === 'Starts with' ||
                            value === 'Ends with') &&
                          (field === 'status' || field === 'tags')
                            ? false
                            : true
                        )
                        .map((value) => (
                          <option key={value} value={value.toLowerCase()}>
                            {value}
                          </option>
                        ))}
                    </select>
                    {validator.current.message(
                      'operator',
                      operator,
                      'required',
                      {
                        className: 'text-danger',
                      }
                    )}
                  </div>
                  {operator !== 'is empty' && operator !== 'is not empty' ? (
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Field Value</label>
                      {renderFieldValue(field)}
                      {validator.current.message(
                        'field value',
                        fieldValue,
                        'required',
                        {
                          className: 'text-danger',
                        }
                      )}
                    </div>
                  ) : null}
                </div>
                <div className="modal-footer">
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <div>
                      <button
                        type="button"
                        className="btn btn-default"
                        onClick={handleFilters}
                        disabled={
                          field === '' || operator === '' ? true : false
                        }
                        // disabled={
                        //   JSON.parse(localStorage.getItem('filters')).field ===
                        //     '' ||
                        //   JSON.parse(localStorage.getItem('filters'))
                        //     .fieldValue === ''
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

export default FilterModal;
