import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { CountryServiceProvider } from './services/CountryService';
import { Countries } from './components/Countries';
import { PageHeader } from './components/PageHeader';
import { Loader } from './common/Loader';

function App() {
  return (
    <CountryServiceProvider>
      <PageHeader />
      <Countries />
    </CountryServiceProvider>
  );
}

export default App;
