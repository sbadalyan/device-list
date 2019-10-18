import React from 'react';
import Page from './components/Page';
import { Provider } from 'react-redux';
import store from './store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Page/>
    </Provider>
  );
}

export default App;
