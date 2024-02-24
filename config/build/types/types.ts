export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    favicon: string;
}

export type BuildMode = 'production' | 'development';

export type BuildTarget = 'browserslist' | 'web';
export type BuildPlatform = 'production' | 'stage' | 'test';

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    target: BuildTarget;
    platform?: BuildPlatform;
}
