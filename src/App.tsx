import { Routes, Route, Navigate } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from './components/Header/Header';
import { Layout } from './components/Layout/Layout';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Create } from './pages/Create/Create';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Layout>
        <Routes>
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='create' element={<Create />} />
          <Route path='*' element={<Navigate to='dashboard' replace />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export { App };
