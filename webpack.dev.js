const { merge }=require("webpack-merge");
const common=require("./webpack.common.js");
const { watchFile } = require("graceful-fs");

module.exports=merge(common,{
    mode:"development",
    devtool:"eval-source-map",
    devServer:{
        watchFiles:["./src/template.html"],
        static: "./dist",
        hot:true,
        open:true,
    },
});
