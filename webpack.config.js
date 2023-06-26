module.exports = {
  // Other webpack configuration options...
  module: {
    rules: [
      {
        test: /\.css$/,
        use: "raw-loader",
      },
    ],
  },
};
