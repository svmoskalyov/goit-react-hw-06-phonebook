import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components';
import { Home } from 'pages';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
