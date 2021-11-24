module.exports = {
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [{
            loader: 'less-loader', options: {
              javascriptEnabled: true,
            },
          }]
        },
      ],
    },
  };