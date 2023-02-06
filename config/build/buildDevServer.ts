import { Configuration } from "webpack-dev-server";
import {  BuildOptions as DevServerConfigurations } from "./types/config";

export const buildDevServer = (options: DevServerConfigurations): Configuration => {
  return {
    port: options.port,
    historyApiFallback: true,
  };
};
