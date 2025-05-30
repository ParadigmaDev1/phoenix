export const config = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: "> 0.25%, not dead",
        useBuiltIns: "usage",
        corejs: 3,
      },
    ],
  ],
  plugins: ["@babel/plugin-proposal-class-properties"],
};