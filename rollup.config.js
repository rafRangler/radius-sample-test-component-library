import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import scss from 'rollup-plugin-scss';
import postcss from 'rollup-plugin-postcss';
// import css from 'rollup-plugin-import-css';
import styles from 'rollup-plugin-styles';
import sass from 'rollup-plugin-sass';
import copy from 'rollup-plugin-copy';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');

export default [
    {


        input: 'src/index.ts',
        output: [{
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
        ],
        plugins: [
            resolve(),
            commonjs(),
            postcss({
                extract: false,
                modules: true,
                use: ['sass']
            }),
            copy({
                targets: [
                    { src: 'src/custom.d.ts', dest: 'dist/esm/types' }
                ]
            }),
            typescript({ tsconfig: './tsconfig.json' })
            // postcss({
            //     extract: true,
            //     modules: true,
            //     use: ['sass']
            // }),


            // sass({
            //     output: false
            //     // Write all styles to the bundle destination where .js is replaced by .css
            // })
            // postcss({
            //     minimize: true,
            //     extensions: ['.scss']
            // })
        ]
    },
    {
        input: 'dist/esm/types/index.d.ts',
        output: [{ file: 'dist/index.d.ts', format: 'esm' }],
        plugins: [dts()],
        external: [/\.scss$/]
        // external: ['./src/styles/index.css']
    }
];
