import React, { useEffect, useRef, useState } from 'react';
import { GrAddCircle } from 'react-icons/gr';
import SimpleReactValidator from 'simple-react-validator';

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
  const { profile, data } = cardData;
  const [tasks, setTasks] = useState(data.tasks);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [, forceUpdate] = useState();
  const validator = useRef(new SimpleReactValidator());

  useEffect(() => {
    return () => {
      setOpen(false);
      setTasks([]);
      setEmail('');
      setPhone('');
    };
  }, []);

  const cleanUp = () => {
    setOpen(false);
    setTasks([]);
    setEmail('');
    setPhone('');
  };

  const addTasks = () => {
    setTasks([{ name: '' }, ...tasks]);
  };

  const editTasks = ({ target }, index) => {
    let tempTasks = [...tasks];
    tempTasks.splice(index, 1, { name: target.value });
    setTasks(tempTasks);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Valid', validator.current.allValid(), {
      uuid,
      itemIndex: index,
      data: {
        email,
        phone,
        tasks,
      },
    });
    if (validator.current.allValid()) {
      handleEditFormSubmit({
        uuid,
        itemIndex: index,
        data: {
          email,
          phone,
          tasks,
        },
      });
      document.getElementsByClassName('close')[0].click();
      document.getElementsByClassName('modal-backdrop fade in')[0].remove();
    } else {
      validator.current.showMessages();
      forceUpdate(1);
    }
  };

  return isOpen ? (
    <div
      class="modal fade"
      id={`cardModal${index}${uuid}`}
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
      key={index}
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={cleanUp}
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">
              <input
                className="editable-center"
                placeholder="Enter Card Name"
                value={profile.name}
                onChange={(e) => handleChange(e, 'name', uuid, index)}
              />
            </h4>
          </div>
          <form onSubmit={handleSubmit}>
            <div class="modal-body">
              <div class="form-group">
                <div className="image-upload">
                  <label for="file-input">
                    <img src="./favicon.ico" alt="avatar" />
                  </label>
                  <input id="file-input" type="file" />
                </div>
              </div>
              <div class="form-group">
                <label
                  className="form-label align-items-start"
                  for="exampleInputEmail1"
                >
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                  value={email}
                  onChange={({ target }) => setEmail(target.value)}
                />
                {validator.current.message('email', email, 'email', {
                  className: 'text-danger',
                })}
              </div>
              <div class="form-group">
                <label
                  className="form-label align-items-start"
                  for="exampleInputEmail1"
                >
                  Phone Number
                </label>
                <input
                  type="phone"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Phone No."
                  value={phone}
                  onChange={({ target }) => setPhone(target.value)}
                />
                {validator.current.message('phoneNo.', phone, 'phone', {
                  className: 'text-danger',
                })}
              </div>
              <div className="dynamic-form-block">
                <div className="dynamic-form-label">
                  <label className="form-label">Tasks</label>
                  <label onClick={addTasks} className="form-label">
                    <GrAddCircle />
                  </label>
                </div>
                <div className="dynamic-form-body">
                  {tasks.length !== 0 ? (
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">Name</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tasks.map((task, index) => (
                          <tr key={`${data}${index}`}>
                            <th scope="row">{index + 1}</th>
                            <td>
                              <input
                                className="editable-left"
                                placeholder="Enter Task"
                                value={task.name}
                                onChange={(e) => editTasks(e, index)}
                              />
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <div className="empty-block">Empty Tasks</div>
                  )}
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
                onClick={cleanUp}
              >
                Close
              </button>
              <button type="submit" class="btn btn-primary">
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
