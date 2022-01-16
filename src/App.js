import React from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'

function App() {
  return (
    <Div>
        <Sidebar />
        <Dashboard />
    </Div>

  );
}

export default App;
const Div = styled.div `
position: relative;
`;
