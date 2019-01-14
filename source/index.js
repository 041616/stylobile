import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from './utils';

const Hello = () => <span>Hello world!</span>;

if (isMobile) {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}
