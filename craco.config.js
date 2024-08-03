const CracoAlias = require("craco-alias");
const FontPreloadPulgin = require('webpack-font-preload-plugin')

module.exports = {
    plugins: [
        {
            plugin: CracoAlias,
            options: {
                source: 'tsconfig',
                tsConfigPath: 'tsconfig.paths.json',
            },
        },
    ],
    webpack: {
        plugins: {
            add: [new FontPreloadPulgin({
                extensions: ['woff2'],
            })],
        }
    }
}