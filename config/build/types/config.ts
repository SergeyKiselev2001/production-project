export type BuildMode = 'production' | 'development';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  runAnalizer: boolean;
}

export interface EnvOptions {
  port: number;
  mode: BuildMode;
}


/// test pr