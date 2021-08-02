import { defineConfig } from 'rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonJS from '@rollup/plugin-commonjs';
import scss from 'rollup-plugin-scss';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  input: 'ts-output/index.js',
  output: {
    file: 'dist/index.js',
    format: 'esm',
  },
  plugins: [peerDepsExternal(), nodeResolve(), commonJS(), scss(), terser()],
});
