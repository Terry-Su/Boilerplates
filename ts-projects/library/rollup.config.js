import { babel } from "@rollup/plugin-babel";
// import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
const extensions = [".js", ".ts"];
import path from 'path'
import fs from 'fs'
import rimraf from 'rimraf'

const pkg = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'package.json'), 'utf-8'))
const external = Object.keys(pkg.dependencies || {})

rimraf.sync(path.resolve(__dirname, 'lib'))
export default [
  {
    input: "src/index.ts",
    output: {
      dir: "lib",
      format: "cjs",
      preserveModules: true,
      // exports: "auto",
      exports: "named",
    },
    plugins: [
      nodeResolve({ extensions }),
      // commonjs(),
      babel({
        exclude: "node_modules/**",
        extensions,
        include: ["src/**/*"],
        babelHelpers: 'bundled',
      }),
    ],
    external
  },
];
