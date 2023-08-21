import './App.css';
import { Countries } from './components/Countries';
import { PageHeader } from './components/PageHeader';
import { Fragment } from 'react';

function App() {
  return (
    <Fragment>
      <PageHeader />
      <Countries />
    </Fragment>
  );
}

export default App;
