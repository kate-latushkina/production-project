import type webpack from "webpack";
import { type BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoaders";

export function buildLoaders ({ isDev }: BuildOptions): webpack.RuleSetRule[] {
  const cssLoader = buildCssLoader(isDev);

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/
  };

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"]
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff)$/i,
    use: [
      {
        loader: "file-loader"
      }
    ]
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        plugins: [
          [
            "i18next-extract",
            {
              locales: ["en", "ru"],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  };

  return [
    babelLoader,
    typescriptLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ];
}
