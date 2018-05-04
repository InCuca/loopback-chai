// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import pkg from './package.json';
import fixMktmpdir from './.rollup/fix-mktmpdir';

export default {
    input: 'index.js',
    output: {
        file: 'dist/loopback-chai.js',
        format: 'cjs'
    },
    plugins: [
      fixMktmpdir,
      resolve({
        preferBuiltins: true,
      }),
      commonjs({
        namedExports: {
          'node_modules/chai/index.js': ['expect']
        }
      }),
        json(),
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
