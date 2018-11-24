module.exports = {
    filenameHashing: process.env.NODE_ENV !== 'production',
    css: {
        extract: false
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV !== 'production') {
            config.entry.app = './src/dev.js';
        }
    },
    chainWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            config.output.libraryTarget('commonjs2');
            config.optimization.delete('splitChunks');
        }
    }
};
