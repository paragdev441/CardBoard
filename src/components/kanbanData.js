import uuid from 'uuid/v4';

const kanbanData = [
  {
    id: uuid(),
    profile: {
      imgURL: 'https://source.unsplash.com/random/200x200?sig=1',
      name: 'Card Name 1',
      companyName: '',
      phone: '+919264199523',
      emial: 'abc@gmail.com',
      tags: [
        {
          name: 'Pending',
          value: 'pending',
        },
        {
          name: 'Progress',
          value: 'progress',
        },
        {
          name: 'Done',
          value: 'done',
        },
      ],
      status: 'pending',
    },
    data: {
      shortMessage: 'You: #body1',
      threads: 5,
      pending: 1,
      converstations: [
        {
          message: '#msg1.1',
        },
        {
          message: '#msg1.2',
        },
      ],
      task: [
        {
          name: '#task1',
        },
        {
          name: '#task2',
        },
        {
          name: '#task3',
        },
        {
          name: '#task4',
        },
      ],
      activity: [],
    },
  },
  {
    id: uuid(),
    profile: {
      imgURL: 'https://source.unsplash.com/random/200x200?sig=2',
      name: 'Card Name 2',
      companyName: '',
      phone: '+919084132277',
      emial: 'def@gmail.com',
      tags: [
        {
          name: 'Pending',
          value: 'pending',
        },
        {
          name: 'Progress',
          value: 'progress',
        },
        {
          name: 'Done',
          value: 'done',
        },
      ],
      status: 'pending',
    },
    data: {
      shortMessage: 'Sam: #body2',
      threads: 3,
      pending: 5,
      converstations: [
        {
          message: '#msg2.1',
        },
        {
          message: '#msg2.2',
        },
      ],
      task: [
        {
          name: '#task1',
        },
        {
          name: '#task2',
        },
        {
          name: '#task3',
        },
        {
          name: '#task4',
        },
      ],
      activity: [],
    },
  },
  {
    id: uuid(),
    profile: {
      imgURL: 'https://source.unsplash.com/random/200x200?sig=3',
      name: 'Card Name 3',
      companyName: '',
      phone: '+919345127459',
      emial: 'ghi@gmail.com',
      tags: [
        {
          name: 'Pending',
          value: 'pending',
        },
        {
          name: 'Progress',
          value: 'progress',
        },
        {
          name: 'Done',
          value: 'done',
        },
      ],
      status: 'pending',
    },
    data: {
      shortMessage: 'You: #body3',
      threads: 1,
      pending: 2,
      converstations: [
        {
          message: '#msg3.1',
        },
        {
          message: '#msg3.2',
        },
      ],
      task: [
        {
          name: '#task1',
        },
        {
          name: '#task2',
        },
        {
          name: '#task3',
        },
        {
          name: '#task4',
        },
      ],
      activity: [],
    },
  },
];

const singleKanabanData = {
  profile: {
    imgURL: 'https://source.unsplash.com/random/200x200?sig=1',
    name: '',
    companyName: '',
    phone: '',
    emial: '',
    tags: [
      {
        name: 'Pending',
        value: 'pending',
      },
      {
        name: 'Progress',
        value: 'progress',
      },
      {
        name: 'Done',
        value: 'done',
      },
    ],
    status: '',
  },
  data: {
    shortMessage: '',
    threads: 0,
    pending: 0,
    converstations: [
      {
        message: '',
      },
      {
        message: '',
      },
    ],
    task: [
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
      {
        name: '',
      },
    ],
    activity: [],
  },
};

export { kanbanData, singleKanabanData };
