const path = require('path');
const cssVars = require(path.resolve(__dirname, 'postcss.vars.js'));


module.exports = {
    parser: 'sugarss',
    plugins: [
        require('postcss-variables')({ globals: cssVars }),
        require('postcss-nested'),
        require('autoprefixer')({ browsers: ['last 3 versions'] }),
    ]
};

