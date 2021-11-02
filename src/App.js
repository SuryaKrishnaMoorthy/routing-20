import { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Welcome from './pages/Welcome';
import Products from './pages/Products';

function App() {
  return (
    <Fragment>
      <Route path='/welcome'>
        <Welcome />
      </Route>
      <Route path='/products'>
        <Products />
      </Route>
      <Route path='/' exact>
      <h1>Lets get started</h1>
      </Route>
    </Fragment>
  );
}

export default App;
