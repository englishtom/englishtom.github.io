import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import styles from './assets/styles/master.scss';

// first we grab reference to the container node
const domContainerNode = window.document.getElementById('react-app-container');

ReactDOM.unmountComponentAtNode(domContainerNode);
ReactDOM.render(<App />, domContainerNode);
