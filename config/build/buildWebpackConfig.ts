import { Configuration } from "webpack";
import { buildDevServer } from "./buildDevServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export const buildWebpackConfig = (options: BuildOptions): Configuration => {
  const { mode, paths, isDev } = options;
  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "main.[hash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins({ path: paths.html }),
    module: { rules: buildLoaders(options) },
    resolve: buildResolvers(),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  };
};