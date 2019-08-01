import {plugins} from './build/rollup_plugins';


export default {
    input: 'test/integration/lib/query-browser.js',
    output: {
        name: 'queryTests',
        format: 'umd',
        sourcemap: 'inline',
        indent: false,
        file: 'test/dist/query-test.js'
    },
    plugins: plugins(false, false, true),
    external: [ 'test', 'mapboxgl' ]
}