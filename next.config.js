// next.config.js
const withStyles = require('@webdeb/next-styles')
const withImages = require('next-images')
const withFonts = require('next-fonts'); 



// Note the nested with loaders. 
module.exports = withImages(
    withFonts(
    withStyles({
        less: true, // use .less files
        sass: true, // use .scss files
        modules: true, // style.(m|module).css & style.(m|module).scss for module files
        lessLoaderOptions: {
            javascriptEnabled: true,
        },
        sassLoaderOptions: {
            sassOptions: {
            includePaths: ["src/styles"], // @import 'variables'; # loads (src/styles/varialbes.scss), you got it..
            },
        },
        webpack: (config) => {
            config.module.rules.push({
                test: /\.md$/,
                use: 'raw-loader'
            });
            return config
        }
    },
)))