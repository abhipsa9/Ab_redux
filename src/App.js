import React from 'react';
import './style.css';
import Numbers from './numbers';
import All from './all';
import reducer from './reducer';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

export default function App() {
  return (
    <Provider store={store}>
      <div style={{ display: 'flex' }}>
        <div
          style={{
            height: '100vh',
            width: '150px',
            margin: '10px',
            borderStyle: 'solid',
          }}
        >
          <Numbers />
        </div>
        <div
          style={{
            height: '100vh',
            width: '150px',
            margin: '10px',
            borderStyle: 'solid',
          }}
        >
          <All />
        </div>
      </div>
    </Provider>
  );
}
