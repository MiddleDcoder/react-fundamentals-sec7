import React from 'react';
import ReactDOM from 'react-dom/client';

const div = React.createElement('div', null, [
  React.createElement('h1', null, 'Hi'),
  React.createElement('p', null, 'Hello'),
  React.createElement('p', null, 'Hey'),
]);
const rootEl = document.querySelector('#root');
const root = ReactDOM.createRoot(rootEl);

root.render(div);
