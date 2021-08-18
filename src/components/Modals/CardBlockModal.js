import React from 'react';
import { GrAddCircle } from 'react-icons/gr';

const CardBlockModal = () => {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModalLabel"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">
              <input className="editable-center" value="Add CardBlock" />
            </h4>
          </div>
          <form>
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
                />
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
                />
              </div>
              {/* <div className="form-multi-group">
                <div class="form-group">
                  <label for="exampleInputEmail1">Card Name</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1">Card Summary</label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Email"
                  />
                </div>
              </div> */}
              <div className="dynamic-form-block">
                <div className="dynamic-form-label">
                  <label className="form-label">Tasks</label>
                  <label className="form-label">
                    <GrAddCircle />
                  </label>
                </div>
                <div className="dynamic-form-body">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <input className="editable-left" value="Mark" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <input className="editable-left" value="Jacob" />
                        </td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <input className="editable-left" value="Larry" />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
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
  );
};

export default CardBlockModal;
