import nodeResolve from "@rollup/plugin-node-resolve";
import { dts } from "rollup-plugin-dts";
import { defineRollupSwcOption, swc } from "rollup-plugin-swc3";

const swcOptions = defineRollupSwcOption({
  jsc: {
    parser: {
      syntax: "typescript",
    },
    target: "esnext",
  },
  sourceMaps: true,
});

/** @type {import('rollup').RollupOptions} */
export default [
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "es",
      sourcemap: true,
    },
    external: [/node_modules/],
    plugins: [swc(swcOptions), nodeResolve()],
  },
  {
    input: "src/index.ts",
    output: {
      dir: "dist",
      format: "es",
      sourcemap: true,
    },
    plugins: [dts()],
  },
];
