import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
const extensions = [".js", ".ts"];
export default [
  {
    input: "src/index.ts",
    output: {
      dir: "lib",
      format: "cjs",
      preserveModules: true,
      exports: "auto",
    },
    plugins: [
      nodeResolve({ extensions }),
      commonjs(),
      babel({
        exclude: "node_modules/**",
        extensions,
        include: ["src/**/*"],
        babelHelpers: 'bundled',
      }),
    ],
  },
];
