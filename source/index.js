import React from 'react';
import ReactDOM from 'react-dom';
import { isMobile, removeEmptyProps } from './utils';
import { Title } from './components/CompanyName';
import { Title as Title2 } from './components/comp';
import { ThemeContext } from './themeContext';
import defaultTheme from './defaultTheme';


const App = () => {
    const theme = removeEmptyProps({
        colors: {
            foreground: '',
            background: '#000000',
        },
    });
    const currentTheme = Object.assign(defaultTheme, theme);
    return (
        <ThemeContext.Provider value={currentTheme}>
            <Title />
            <Title2 />
        </ThemeContext.Provider>
    );
};


if (isMobile) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
