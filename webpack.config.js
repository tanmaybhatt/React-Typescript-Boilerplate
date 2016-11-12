var webpack = require('webpack');
var path = require('path');
var WriteFilePlugin = require("write-file-webpack-plugin");
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var BUILD_DIR= path.resolve(__dirname,'dist/js');
module.exports = {
    entry :"./src/index.tsx",
    devServer: {
        outputPath: path.join(__dirname, 'dist/js'),
       compress : true
    },
    output:
    {
         path: BUILD_DIR,
        filename: "./bundle.js",
    },
    devtool : "source-map",
    resolve : {
        extensions :["",".webpack,js",".web.js",".ts",".tsx",".js"]
    },
    module:
    {
        loaders :[
            {
                test: /\.tsx?$/, loader:"ts-loader"
            },
             {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!sass-loader") 
            }
        ],
        preLoader : [
            {
                test:/\.js$/,loader:"source-map-loader"
            }
        ]
    },
    externals:
    {
        "react" : "React",
        "react-dom":"ReactDOM"
    },
    plugins : [WriteFilePlugin(),new webpack.optimize.DedupePlugin(),new webpack.optimize.UglifyJsPlugin({minimize: true,comments:false}),new ExtractTextPlugin('../css/style.css', {
            allChunks: true
        }),new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      },
    })]
};