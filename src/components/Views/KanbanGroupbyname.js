import React from 'react';

const KanbanGroupByName = () => {
  return (
    <div
      className="group-area-header"
      style={{ display: 'flex', height: '40rem' }}
    >
      <div
        style={{
          color: 'rgb(26, 115, 11)',
          background: 'rgb(118, 187, 240)',
          padding: '25px 0px',
          width: '350px',
          margin: '0px 10px',
          overflow: 'scroll',
        }}
      >
        <div className="board-title">
          <h2>
            <input
              className="editable-left"
              placeholder="Enter Card Name"
              defaultValue="Todo"
            />
          </h2>
          <h4 className="block-items-count">3 items</h4>
        </div>
        <div>
          <button type="button" className="btn btn-success add-card-button">
            Add Card
          </button>
        </div>
        <div
          style={{
            background: 'lightblue',
            height: '23rem',
            width: '307px',
            margin: 'auto',
            padding: 'unset',
          }}
        >
          <div style={{ padding: '10px' }}>
            <div
              data-rbd-draggable-context-id={0}
              data-rbd-draggable-id="c42b42bb-c258-4af7-8d53-356b538ef246"
              className="card-block"
              style={{
                backgroundColor: 'rgb(123, 239, 123)',
                color: 'rgb(9, 99, 20)',
              }}
            >
              <div className="open-card-options">
                <span
                  className="smart-buttons"
                  data-toggle="modal"
                  data-backdrop="static"
                  data-target="#cardModal188b31406-d328-4024-929a-6c35691d9b23"
                  style={{ padding: '5px' }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span
                  tabIndex={0}
                  role="button"
                  aria-describedby="rbd-hidden-text-0-hidden-text-0"
                  data-rbd-drag-handle-draggable-id="c42b42bb-c258-4af7-8d53-356b538ef246"
                  data-rbd-drag-handle-context-id={0}
                  draggable="false"
                  style={{ padding: '5px' }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span style={{ cursor: 'pointer', padding: '5px' }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                  </svg>
                </span>
              </div>
              <div>
                <div className="block-body">
                  <div className="card kanban-card">
                    <div className="card-header">
                      <img
                        src="https://source.unsplash.com/random/200x200?sig=1"
                        alt="avatar"
                      />
                      <h4>
                        <input
                          className="editable-left"
                          placeholder="Enter Card Name"
                          defaultValue="true"
                        />
                      </h4>
                      <div>
                        <input
                          className="editable-left"
                          placeholder="Enter Summary"
                          defaultValue="true"
                        />
                      </div>
                      <ul style={{ textAlign: 'left' }}>
                        <li>
                          <input
                            type="number"
                            min={0}
                            className="editable-number"
                            defaultValue={0}
                          />{' '}
                          Threads
                        </li>
                        <li>
                          <input
                            type="number"
                            min={0}
                            className="editable-number"
                            defaultValue={0}
                          />{' '}
                          Pending Task
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: 'rgb(26, 115, 11)',
          background: 'rgb(118, 187, 240)',
          padding: '25px 0px',
          width: '350px',
          margin: '0px 10px',
          overflow: 'scroll',
        }}
      >
        <div className="board-title">
          <h2>
            <input
              className="editable-left"
              placeholder="Enter Card Name"
              defaultValue="Todo"
            />
          </h2>
          <h4 className="block-items-count">3 items</h4>
        </div>
        <div>
          <button type="button" className="btn btn-success add-card-button">
            Add Card
          </button>
        </div>
        <div
          style={{
            background: 'lightblue',
            height: '23rem',
            width: '307px',
            margin: 'auto',
            padding: 'unset',
          }}
        >
          <div style={{ padding: '10px' }}>
            <div
              data-rbd-draggable-context-id={0}
              data-rbd-draggable-id="c42b42bb-c258-4af7-8d53-356b538ef246"
              className="card-block"
              style={{
                backgroundColor: 'rgb(123, 239, 123)',
                color: 'rgb(9, 99, 20)',
              }}
            >
              <div className="open-card-options">
                <span
                  className="smart-buttons"
                  data-toggle="modal"
                  data-backdrop="static"
                  data-target="#cardModal188b31406-d328-4024-929a-6c35691d9b23"
                  style={{ padding: '5px' }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span
                  tabIndex={0}
                  role="button"
                  aria-describedby="rbd-hidden-text-0-hidden-text-0"
                  data-rbd-drag-handle-draggable-id="c42b42bb-c258-4af7-8d53-356b538ef246"
                  data-rbd-drag-handle-context-id={0}
                  draggable="false"
                  style={{ padding: '5px' }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span style={{ cursor: 'pointer', padding: '5px' }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                  </svg>
                </span>
              </div>
              <div>
                <div className="block-body">
                  <div className="card kanban-card">
                    <div className="card-header">
                      <img
                        src="https://source.unsplash.com/random/200x200?sig=1"
                        alt="avatar"
                      />
                      <h4>
                        <input
                          className="editable-left"
                          placeholder="Enter Card Name"
                          defaultValue="true"
                        />
                      </h4>
                      <div>
                        <input
                          className="editable-left"
                          placeholder="Enter Summary"
                          defaultValue="true"
                        />
                      </div>
                      <ul style={{ textAlign: 'left' }}>
                        <li>
                          <input
                            type="number"
                            min={0}
                            className="editable-number"
                            defaultValue={0}
                          />{' '}
                          Threads
                        </li>
                        <li>
                          <input
                            type="number"
                            min={0}
                            className="editable-number"
                            defaultValue={0}
                          />{' '}
                          Pending Task
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: 'rgb(26, 115, 11)',
          background: 'rgb(118, 187, 240)',
          padding: '25px 0px',
          width: '350px',
          margin: '0px 10px',
          overflow: 'scroll',
        }}
      >
        <div className="board-title">
          <h2>
            <input
              className="editable-left"
              placeholder="Enter Card Name"
              defaultValue="Todo"
            />
          </h2>
          <h4 className="block-items-count">3 items</h4>
        </div>
        <div>
          <button type="button" className="btn btn-success add-card-button">
            Add Card
          </button>
        </div>
        <div
          style={{
            background: 'lightblue',
            height: '23rem',
            width: '307px',
            margin: 'auto',
            padding: 'unset',
          }}
        >
          <div style={{ padding: '10px' }}>
            <div
              data-rbd-draggable-context-id={0}
              data-rbd-draggable-id="c42b42bb-c258-4af7-8d53-356b538ef246"
              className="card-block"
              style={{
                backgroundColor: 'rgb(123, 239, 123)',
                color: 'rgb(9, 99, 20)',
              }}
            >
              <div className="open-card-options">
                <span
                  className="smart-buttons"
                  data-toggle="modal"
                  data-backdrop="static"
                  data-target="#cardModal188b31406-d328-4024-929a-6c35691d9b23"
                  style={{ padding: '5px' }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span
                  tabIndex={0}
                  role="button"
                  aria-describedby="rbd-hidden-text-0-hidden-text-0"
                  data-rbd-drag-handle-draggable-id="c42b42bb-c258-4af7-8d53-356b538ef246"
                  data-rbd-drag-handle-context-id={0}
                  draggable="false"
                  style={{ padding: '5px' }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span style={{ cursor: 'pointer', padding: '5px' }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                  </svg>
                </span>
              </div>
              <div>
                <div className="block-body">
                  <div className="card kanban-card">
                    <div className="card-header">
                      <img
                        src="https://source.unsplash.com/random/200x200?sig=1"
                        alt="avatar"
                      />
                      <h4>
                        <input
                          className="editable-left"
                          placeholder="Enter Card Name"
                          defaultValue="true"
                        />
                      </h4>
                      <div>
                        <input
                          className="editable-left"
                          placeholder="Enter Summary"
                          defaultValue="true"
                        />
                      </div>
                      <ul style={{ textAlign: 'left' }}>
                        <li>
                          <input
                            type="number"
                            min={0}
                            className="editable-number"
                            defaultValue={0}
                          />{' '}
                          Threads
                        </li>
                        <li>
                          <input
                            type="number"
                            min={0}
                            className="editable-number"
                            defaultValue={0}
                          />{' '}
                          Pending Task
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          color: 'rgb(26, 115, 11)',
          background: 'rgb(118, 187, 240)',
          padding: '25px 0px',
          width: '350px',
          margin: '0px 10px',
          overflow: 'scroll',
        }}
      >
        <div className="board-title">
          <h2>
            <input
              className="editable-left"
              placeholder="Enter Card Name"
              defaultValue="Todo"
            />
          </h2>
          <h4 className="block-items-count">3 items</h4>
        </div>
        <div>
          <button type="button" className="btn btn-success add-card-button">
            Add Card
          </button>
        </div>
        <div
          style={{
            background: 'lightblue',
            height: '23rem',
            width: '307px',
            margin: 'auto',
            padding: 'unset',
          }}
        >
          <div style={{ padding: '10px' }}>
            <div
              data-rbd-draggable-context-id={0}
              data-rbd-draggable-id="c42b42bb-c258-4af7-8d53-356b538ef246"
              className="card-block"
              style={{
                backgroundColor: 'rgb(123, 239, 123)',
                color: 'rgb(9, 99, 20)',
              }}
            >
              <div className="open-card-options">
                <span
                  className="smart-buttons"
                  data-toggle="modal"
                  data-backdrop="static"
                  data-target="#cardModal188b31406-d328-4024-929a-6c35691d9b23"
                  style={{ padding: '5px' }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.8995 4.10052V2.10052H21.8995V10.1005H19.8995V5.51477L14.1213 11.293L12.7071 9.87878L18.4854 4.10052H13.8995Z"
                      fill="currentColor"
                    />
                    <path
                      d="M4.10046 13.8995H2.10046V21.8995H10.1005V19.8995H5.51468L11.2929 14.1212L9.87872 12.707L4.10046 18.4853V13.8995Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span
                  tabIndex={0}
                  role="button"
                  aria-describedby="rbd-hidden-text-0-hidden-text-0"
                  data-rbd-drag-handle-draggable-id="c42b42bb-c258-4af7-8d53-356b538ef246"
                  data-rbd-drag-handle-context-id={0}
                  draggable="false"
                  style={{ padding: '5px' }}
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth={0}
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M8 12C8 13.1046 7.10457 14 6 14C4.89543 14 4 13.1046 4 12C4 10.8954 4.89543 10 6 10C7.10457 10 8 10.8954 8 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M6 20C7.10457 20 8 19.1046 8 18C8 16.8954 7.10457 16 6 16C4.89543 16 4 16.8954 4 18C4 19.1046 4.89543 20 6 20Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 6C14 7.10457 13.1046 8 12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14Z"
                      fill="currentColor"
                    />
                    <path
                      d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 8C19.1046 8 20 7.10457 20 6C20 4.89543 19.1046 4 18 4C16.8954 4 16 4.89543 16 6C16 7.10457 16.8954 8 18 8Z"
                      fill="currentColor"
                    />
                    <path
                      d="M20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10C19.1046 10 20 10.8954 20 12Z"
                      fill="currentColor"
                    />
                    <path
                      d="M18 20C19.1046 20 20 19.1046 20 18C20 16.8954 19.1046 16 18 16C16.8954 16 16 16.8954 16 18C16 19.1046 16.8954 20 18 20Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <span style={{ cursor: 'pointer', padding: '5px' }}>
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth={0}
                    viewBox="0 0 1024 1024"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-200 0H360v-72h304v72z" />
                  </svg>
                </span>
              </div>
              <div>
                <div className="block-body">
                  <div className="card kanban-card">
                    <div className="card-header">
                      <img
                        src="https://source.unsplash.com/random/200x200?sig=1"
                        alt="avatar"
                      />
                      <h4>
                        <input
                          className="editable-left"
                          placeholder="Enter Card Name"
                          defaultValue="true"
                        />
                      </h4>
                      <div>
                        <input
                          className="editable-left"
                          placeholder="Enter Summary"
                          defaultValue="true"
                        />
                      </div>
                      <ul style={{ textAlign: 'left' }}>
                        <li>
                          <input
                            type="number"
                            min={0}
                            className="editable-number"
                            defaultValue={0}
                          />{' '}
                          Threads
                        </li>
                        <li>
                          <input
                            type="number"
                            min={0}
                            className="editable-number"
                            defaultValue={0}
                          />{' '}
                          Pending Task
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KanbanGroupByName;
