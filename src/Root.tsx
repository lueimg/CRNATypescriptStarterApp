import * as React from 'react';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';

class Root extends React.Component<any, any> {
  render() {
    return (
        <Provider store={store}>
          <App />
        </Provider>
    );
  }
}

export default Root;


