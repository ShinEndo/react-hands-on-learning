import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
import data from './data.json';
import { Menu } from './Menu';

ReactDOM.hydrate(
    <Menu recipes={data} title="Delicious Recipes"/>,
    document.getElementById('root')
);