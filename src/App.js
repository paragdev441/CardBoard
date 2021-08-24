import React, { lazy } from 'react';
import { Suspense } from 'react';
import './App.css';
// import Kanban from './container/Kanban';

const Kanban = lazy(() => import('./container/Kanban'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Kanban />
    </Suspense>
  );
}

export default App;
