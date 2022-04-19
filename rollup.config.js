import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import postcss from 'rollup-plugin-postcss';
import command from 'rollup-plugin-command';
import copy from 'rollup-plugin-copy';
import * as packageJson from './package.json';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      resolve(),
      commonjs(),
      postcss({
        extract: false,
        modules: true,
        use: ['sass'],
      }),
      copy({
        targets: [
          {
            src: 'src/react-app-env.d.ts',
            dest: ['dist/cjs/types/', 'dist/esm/types/'],
          },
        ],
      }),
      typescript({ tsconfig: './tsconfig.build.json' }),
    ],
  },
];
