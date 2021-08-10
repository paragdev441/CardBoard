import React from 'react';
import CardBlock from './CardBlock';

const KanbanBlock = ({ id, times }) => {
  return times.map((time) => <CardBlock id={id} />);
};

export default KanbanBlock;
