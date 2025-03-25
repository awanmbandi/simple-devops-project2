import React from 'react';
import ProviderList from './components/ProviderList';

function App() {
  return (
    <div>
      <header style={{ padding: '1rem', background: '#0077cc', color: '#fff' }}>
        <h1>Healthcare Service Finder</h1>
      </header>
      <main style={{ padding: '1rem' }}>
        <ProviderList />
      </main>
    </div>
  );
}

export default App;
