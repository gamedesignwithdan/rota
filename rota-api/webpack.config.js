const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DotEnv = require('dotenv-webpack');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');

module.exports = {
	mode: process.env.BUILD_ENV === 'production' ? 'production' : 'development',
	entry: './src/index',
	devtool: 'source-map',
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 3000,
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx'],
	},
	target: 'node',
	module: {
		rules: [
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader',
						options: {
							configFile:
								process.env.BUILD_ENV === 'production'
									? 'tsconfig.production.json'
									: 'tsconfig.json',
						},
					},
				],
			},
			{
				enforce: 'pre',
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'source-map-loader',
			},
		],
	},
	externals: [nodeExternals()],
	plugins: [
		new CleanWebpackPlugin(),
		new DotEnv({}),
		new webpack.EnvironmentPlugin({ BUILD_ENV: process.env.BUILD_ENV }),
	],

	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
};
