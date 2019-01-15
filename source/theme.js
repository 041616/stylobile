import React from 'react';


export const defaultTheme = {
    colors: {
        foreground: '#000000',
        background: '#eeeeee',
    },
};


export const ThemeContext = React.createContext(defaultTheme);
