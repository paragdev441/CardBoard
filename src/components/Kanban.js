import React from 'react';
import KanbanBlock from './KanbanBlock';

const Kanban = () => {
  return (
    <div className="kanban-board">
      <div>
        <KanbanBlock id={1} times={[1, 2, 3, 4]} />
      </div>
      <div>
        <KanbanBlock id={2} times={[1, 2, 3]} />
      </div>
      <div>
        <KanbanBlock id={3} times={[1, 2]} />
      </div>
      <div>
        <KanbanBlock id={4} times={[1]} />
      </div>
    </div>
  );
};

export default Kanban;
