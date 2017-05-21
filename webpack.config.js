var webpack = require('webpack');
var path = require('path');
var openBrowserPulgin = require('open-browser-webpack-plugin');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
	entry: {
    main: path.resolve(__dirname,'app/index.js'),
    vendor: ['react','react-dom','react-router','redux','react-redux','redux-thunk']
  },
	output: {
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		filename:'js/[name]-[hash].js',
		chunkFilename: 'js/[name].[chunkhash:5].chunk.js'
	},
	module: {
		rules: [
			{test: /\.json$/, use: "json-loader"},
			{test: /\.js$/, exclude: /node_modules/, use: "babel-loader"},
      {test: /\.scss$/, use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader?modules&localIdentName=[name]-[local]-[hash:base64:5]!postcss-loader!sass-loader'
			})},
			{test: /\.css$/, use: ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use: 'css-loader!postcss-loader'
			})},
			{test: /\.(png|jpg|jpeg|gif)$/, use: 'url-loader?limit=8192&name=imgs/[hash:8].[name].[ext]'},
			{test: /\.(svg)$/i, use: 'svg-sprite-loader', include: require.resolve('antd-mobile').replace(/warn\.js$/, '')}
		]
	},
	resolve: {
	  modules: ['node_modules', path.join(__dirname, '../node_modules')],
	  extensions: ['.web.js', '.js', '.json'],
	},
	// webpack-dev-server 配置
	devServer:{
		host: '192.168.0.107',
		contentBase: './build',
		historyApiFallback: true,
		inline: true,
		port: 8800,
	},
	plugins: [
		// new openBrowserPulgin({url:'http://localhost:8082/build'}),
		new webpack.LoaderOptionsPlugin({
			options: {
				postcss: function(){
					autoprefixer
				},
			}
		}),
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.html'
		}),
    new webpack.optimize.CommonsChunkPlugin({
      name:'react',
			filename:'js/react.js'
    }),
		new webpack.optimize.UglifyJsPlugin({
			output: {
				comments: false
			},
			compress: {
				warnings: false
			}
		}),
		new webpack.HotModuleReplacementPlugin(),
		new ExtractTextPlugin("css/[name]-[hash].css")
	]
}
