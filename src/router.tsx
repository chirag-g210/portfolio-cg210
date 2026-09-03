import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import HomeRoute from './routes/index';
import ServicesRoute from './routes/services';
import AboutRoute from './routes/about';
import ProjectsRoute from './routes/projects';
import ContactRoute from './routes/contact';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeRoute />} />
          <Route path="services" element={<ServicesRoute />} />
          <Route path="about" element={<AboutRoute />} />
          <Route path="projects" element={<ProjectsRoute />} />
          <Route path="contact" element={<ContactRoute />} />

          {/* Redirect deprecated standalone routes to composed /about sections */}
          <Route path="achievements" element={<Navigate to="/about#achievements" replace />} />
          <Route path="coding-profiles" element={<Navigate to="/about#coding-profiles" replace />} />
          <Route path="skills" element={<Navigate to="/about#skills" replace />} />
          <Route path="experience" element={<Navigate to="/about#experience" replace />} />
          <Route path="certificates" element={<Navigate to="/about#certificates" replace />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
