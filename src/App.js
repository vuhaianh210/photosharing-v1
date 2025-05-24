import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserList from "./components/UserList";
import UserDetail from "./components/UserDetail";
import UserPhotos from './components/UserPhotos';
import TopBar from './components/TopBar';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <TopBar />
      <Container sx={{ mt: 3 }}>
        <Routes>
          <Route path="/" element={<Navigate to="/users" />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/users/:userId" element={<UserDetail />} />
          <Route path="/photos/:userId" element={<UserPhotos />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
