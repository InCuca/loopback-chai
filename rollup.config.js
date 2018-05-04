// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
    input: 'index.js',
    output: {
        file: 'dist/loopback-chai.js',
        format: 'cjs'
    },
    plugins: [
        resolve(),
        commonjs(),
        babel({
            presets: [
                [
                    "env",
                    {
                        modules: false
                    }
                ]
            ],
            plugins: ["external-helpers"],
            babelrc: false,
            exclude: 'node_modules/**' // only transpile our source code
        })
    ]
};
