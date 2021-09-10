import React, { useRef, useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import SimpleReactValidator from 'simple-react-validator';
// import { getLocalStorage } from '../../Helpers';

/**
 * Renders layout of Kanaban boards's cards' modal for advanced editing of cards
 * @param {*} param0
 * @returns ReactElement
 */
const CardModal = ({
  cardData,
  uuid,
  index,
  isOnline,
  isOpen,
  setOpen,
  handleChange,
  handleEditFormSubmit,
}) => {
  const [email, setEmail] = useState(cardData.email);
  const [phone, setPhone] = useState(cardData.phone);
  const [, forceUpdate] = useState();
  const validator = useRef(new SimpleReactValidator());

  const cleanUp = () => {
    setOpen(false);
    setEmail('');
    setPhone('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validator.current.allValid()) {
      handleEditFormSubmit({
        uuid,
        itemIndex: index,
        data: {
          email,
          phone,
        },
      });
      document.getElementsByClassName('close')[0].click();
      document.getElementsByClassName('modal-backdrop fade in')[0].remove();
      document.body.classList.remove('modal-open');
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };

  return isOpen ? (
    <div
      className="modal fade card-modal-container"
      id={`cardModal${index}${uuid}`}
      tabIndex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      key={index}
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={cleanUp}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 className="modal-title" id="myModalLabel">
              <input
                className="editable-center"
                placeholder="Enter Card Name"
                value={cardData.title}
                onChange={(e) => handleChange(e, 'name', uuid, index)}
              />
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="form-group">
                <div className="image-upload">
                  <label htmlFor="file-input">
                    <img src={cardData.imgURL} alt="avatar" />
                  </label>
                  <input id="file-input" type="file" />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="form-label align-items-start"
                  htmlFor="exampleInputEmail1"
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
                {validator.current.message('email', email, 'email', {
                  className: 'text-danger',
                })}
              </div>
              <div className="form-group">
                <label
                  className="form-label align-items-start"
                  htmlFor="exampleInputEmail1"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Phone No."
                  value={phone}
                  onChange={({ target }) => setPhone(target.value)}
                />
                {validator.current.message('phoneNo.', phone, 'phone', {
                  className: 'text-danger',
                })}
              </div>
              {/* <div className="dynamic-form-block">
                <div className="dynamic-form-body"></div>
              </div> */}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
                onClick={cleanUp}
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
  ) : null;
};

export default CardModal;
