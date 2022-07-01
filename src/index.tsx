import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundDocs from './pages/404/NotFoundDocs';
import NotFoundPage from './pages/404/NotFoundPages';


import App from './pages/App';
import Docs from './pages/Docs';

import './index.css';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<App />} />
        <Route path="/docs/" element={<Docs />} />
        {/* <Route path="/docs/:category/" element={<Docs />} /> */}
        {/* <Route path="/docs/:category/:subcategory/" element={<Docs />} /> */}
        {/* <Route path="/docs/:category/:subcategory/:topic" element={<Docs />} /> */}
        {/* <Route path="/docs/:category/:subcategory/:topic/path" element={<Docs />} /> */}
        <Route path="/docs/*" element={<NotFoundDocs />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

