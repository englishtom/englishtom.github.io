module.exports = {
    plugins: {
        'postcss-preset-env': {
            browsers: ['last 2 versions', 'ie >= 9', 'android >= 4.4', 'ios >= 7'],
            features: {
                customProperties: {
                    preserve: true,
                    warnings: false,
                }
            }
        }
    },
};
