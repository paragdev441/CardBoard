import React, { useRef, useState } from 'react';
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

  const handleSubmit = e => {
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
              {cardData.title}
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
              {/* <div className="form-group">
                <h4 className="form-label align-items-start" style={{ placeSelf: 'center' }}>
                  <b>Email address</b>
                </h4>
                {email}
              </div>
              <div className="form-group">
                <h4
                  className="form-label align-items-start"
                  style={{ placeSelf: 'center' }}
                  // htmlFor="exampleInputEmail1"
                >
                  <b>Phone Number</b>
                </h4>
                {phone}
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
};

export default CardModal;
