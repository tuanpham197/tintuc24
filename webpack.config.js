const path = require('path') // lấy đường dẫn tuyệt đối của thư mục
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const version = +new Date();
const plugins = [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        chunkFilename: '[name].chunk.css',
        filename: `bundle-${version}.css`,
        ignoreOrder: true,
    }),
];
const config = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module:{
    
  
		rules: [
		{
			test: /\.(js|jsx)$/,
			exclude: /node_modules/,
			use: {
				loader: "babel-loader"
			}
		},
      	{
			test: /\.html$/,
			use: [
				{
					loader: "html-loader"
				}
			]
		},
		{
			test: /\.css$/i,
			use: [
				MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            // modules: false,
                            // localIdentName: '[path]__[local]--[hash:base64:6]'
                        },
                    },
			],
        },
        {
            test: /\.scss$/,
            exclude : /node_modules/,
            use : [
                {
                    loader: 'style-loader'
				}, 
				{
                    loader: 'css-loader', // translates CSS into CommonJS
                    options : {
						modules : {
							// localIdentName: '[local]--[hash:base64:7]'
						},
						sourceMap : true
						
                    }
				}, 
				{
					loader: 'sass-loader', // compiles Less to CSS  
					             
				}
            ]
        },
      	{
			test: /\.less$/,
			use: [
				{
					loader: 'style-loader',
				}, 
				{
					loader: 'css-loader', // translates CSS into CommonJS
				}, 
				{
					loader: 'less-loader', // compiles Less to CSS
					options: {
						lessOptions: { // If you are using less-loader@5 please spread the lessOptions to options directly
							modifyVars: {
								'@layout-body-background' : '#fff'
							},
							javascriptEnabled: true,
						}
					},
				}
			]
		},
		{
			test: /\.(png|jpe?g|gif)$/i,
			use: [
				{
					loader: "file-loader?name=/public/img/[name].[ext]",
				},
			],
		  }, 
    ]
  },
  
	devServer: {
		historyApiFallback: true,
	},
	plugins: [...plugins,
		new HtmlWebPackPlugin({
			template: "./public/index.html",
			filename: "./index.html"
		})
	]
}
module.exports = config;