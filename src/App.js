import React, { useRef, useState } from 'react'
import './App.css';
import Main from './components/Main';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container maxWidth="xl" className="Container">
      <Main />
    </Container>
  );
}

export default App;
