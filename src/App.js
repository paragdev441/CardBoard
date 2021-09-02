import React, { lazy } from 'react';
import { Suspense } from 'react';
import './App.css';
// import Kanban from './container/Kanban';

const KanbanNew = lazy(() => import('./container/KanbanNew'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <KanbanNew />
    </Suspense>
  );
}

export default App;
