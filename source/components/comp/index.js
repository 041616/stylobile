import React from 'react';
import css from './style.sss';
import { ThemeContext } from '../../theme';


export class Title extends React.Component {
    static contextType = ThemeContext;

    render() {
        const { colors } = this.context;
        const style = {
            color: colors.foreground,
            background: colors.background,
        };
        return (
            <span className={css.qwe} style={style}>asdasdasd</span>
        );
    }
}
