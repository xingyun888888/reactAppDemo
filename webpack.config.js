var webpack = require('webpack');
var openBrowserPulgin = require('open-browser-webpack-plugin');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
	entry: __dirname + '/app/app.js',
	output: {
		path:__dirname + '/public',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{test: /\.json$/, loader: "json-loader"},
			{test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
			{test: /\.less$/, loader: "style-loader!css-loader?modules!postcss-loader!less-loader"}
		]
	},
	// webpack-dev-server 配置
	devServer:{
		contentBase: './public',
		historyApiFallback: true,
		inline: true,
		port: 8082,
	},
	plugins: [
		// new openBrowserPulgin({url:'http://localhost:8082/public'}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function(){
					autoprefixer
				},
			}
		}),
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.tmpl.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}
