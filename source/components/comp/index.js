import React from 'react';
import css from './style.sss';
import { ThemeContext } from '../../themeContext';


function getThemeStyle(ctx) {
    if (!ctx) return {};
    return {
        color: ctx.colors.foreground,
        background: ctx.colors.background,
    };
}


// eslint-disable-next-line react/prefer-stateless-function
export class Title extends React.Component {
    render() {
        const style = getThemeStyle(this.context);
        return (
            <span className={css.qwe} style={style}>asdasdasd</span>
        );
    }
}


Title.contextType = ThemeContext;
