import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './root.jsx';
import style from './style/main.scss';

let mountNode = document.getElementById('app');

ReactDOM.render(<RootComponent />, mountNode);