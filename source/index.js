import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile } from './utils';
import { Title } from './components/CompanyName';
import { Title as Title2 } from './components/comp';


if (isMobile) {
    ReactDOM.render((
        <div>
            <Title />
            <Title2 />
        </div>
    ), document.getElementById('app'));
}
