// next.config.js
const withFonts = require('next-fonts'); 



// Note the nested with loaders. 
module.exports = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader'
        });
        return config
    }
}