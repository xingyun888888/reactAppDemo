var webpack = require('webpack');
var openBrowserPulgin = require('open-browser-webpack-plugin');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	devtool: false,
	entry: __dirname + '/app/app.js',
	output: {
		path:__dirname + '/public',
		filename: "[name]-[hash].js"
	},
	module: {
		loaders: [
			{test: /\.json$/, loader: "json-loader"},
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.less$/, loader: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?modules!postcss-loader!less-loader'
			})}
		]
	},
	devServer:{
		contentBase: './public',
		historyApiFallback: true,
		inline: true,
		port: 8082,
	},
	plugins: [
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV:JSON.stringify('production')
			}
		}),
		// new openBrowserPulgin({url:'http://localhost:8082/public'}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function(){
					autoprefixer
				},
			}
		}),
		new webpack.BannerPlugin('Copyright Flying Unicons inc'),
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false
			}
		}),
		new ExtractTextPlugin("[name]-[hash].css")
	]
}
