import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CurrencyForm from './components/CurrencyForm';
import CurrencyTable from './components/CurrencyTable';

export default (
  <Route path="/" component={CurrencyForm}>
     <IndexRoute component={CurrencyTable} />
  </Route>
)
