import React, { Suspense, useEffect, useState } from 'react';
import { Img, useImage } from 'react-image';

const CardBlock = ({
  uuid,
  index,
  item: { id, profile, data },
  handleChange,
}) => {
  const [isExpand, setExpand] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // const handleToggle = () => {
  //   setExpand(!isExpand);
  //   setIsEdit(false);
  // };

  function MyImageComponent({ imgURL }) {
    const { src } = useImage({
      srcList: imgURL,
    });

    return <img src={src} />;
  }

  return (
    <div>
      <div className="header">
        {/* <button onClick={handleToggle}>
          {isExpand ? 'Collapse' : 'Expand'}
        </button> */}
        {isExpand ? (
          <button onClick={() => setIsEdit(!isEdit)}>
            {isEdit ? 'Cancel' : 'Edit'}
          </button>
        ) : null}
      </div>
      <div className="block-body">
        <div className="card kanban-card">
          {!isExpand ? (
            <div className="card-header">
              <Suspense fallback={<div class="loader"></div>}>
                {/* <Img
                  class="card-img-top"
                  src={profile.imgURL}
                  alt="Card image cap"
                /> */}
                <MyImageComponent imgURL={profile.imgURL} />
              </Suspense>
              {/* <h4>{profile.name}</h4> */}
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
                {/* <li>{data.threads} Threads</li> */}
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
          ) : null}
          {/* {isExpand ? (
            <form>
              <div className="card-header">
                <img
                  class="card-img-top"
                  src="./favicon.ico"
                  alt="Card image cap"
                />
                <h4>Card Name</h4>
              </div>
              <div class="card-body">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Email</label>
                    {!isEdit ? (
                      <div>parag.sharmars@gmail.com</div>
                    ) : (
                      <input
                        type="email"
                        class="form-control"
                        id="inputEmail4"
                        placeholder="Email"
                        value="parag.sharmars@gmail.com"
                      />
                    )}
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputAddress">Address</label>
                    {!isEdit ? (
                      <div>#441, MIG FLATS</div>
                    ) : (
                      <input
                        type="text"
                        class="form-control"
                        id="inputAddress"
                        placeholder="1234 Main St"
                        value="#441, MIG FLATS"
                      />
                    )}
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputCity">City</label>
                    {!isEdit ? (
                      <div>Chandigarh</div>
                    ) : (
                      <input type="text" class="form-control" id="inputCity" />
                    )}
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputState">State</label>
                    {!isEdit ? (
                      <div>Punjab</div>
                    ) : (
                      <select id="inputState" class="form-control">
                        <option selected>Choose...</option>
                        <option>...</option>
                      </select>
                    )}
                  </div>
                </div>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="inputZip">Zip</label>
                    {!isEdit ? (
                      <div>160062</div>
                    ) : (
                      <input type="text" class="form-control" id="inputZip" />
                    )}
                  </div>
                </div>
                <div class="form-row">
                  <div className="form-group col-md-6">
                    <b>Tasks</b>
                    <div className="task-list">
                      <div className="task-block">
                        <b>1.</b>
                        <span className="task-item">Cras justo odio</span>
                        {isEdit ? (
                          <span>
                            <button type="button">Delete</button>
                          </span>
                        ) : null}
                      </div>
                      <div className="task-block">
                        <b>2.</b>
                        <span className="task-item">
                          Dapibus ac facilisis in
                        </span>
                        {isEdit ? (
                          <span>
                            <button type="button">Delete</button>
                          </span>
                        ) : null}
                      </div>
                      <div className="task-block">
                        <b>3.</b>
                        <span className="task-item">Vestibulum at eros</span>
                        {isEdit ? (
                          <span>
                            <button type="button">Delete</button>
                          </span>
                        ) : null}
                      </div>
                      {isEdit ? (
                        <div className="task-block">
                          <button type="button">Add</button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group"></div>
              <button type="submit" class="btn btn-primary">
                Sign in
              </button>
              <div class="card-body">
                <a href="#" class="card-link">
                  Card link
                </a>
                <a href="#" class="card-link">
                  Another link
                </a>
              </div>
            </form>
          ) : null} */}
        </div>
      </div>
      {/* <div className="edit-button">
        <input
          checked={isEdit}
          onChange={({ target }) => setIsEdit(target.checked)}
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label class="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div> */}
    </div>
  );
};

export default CardBlock;
