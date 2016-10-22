const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");

const webpackDev = require('./conf/webpack/webpack-dev.conf');

gulp.task('test', (done) => {
  console.log('task test');
  done();
});

gulp.task('serve', (done) => {

console.log(webpackDev);
  // Start a webpack-dev-server
    var compiler = webpack(webpackDev);

    new WebpackDevServer(compiler, {
        // server and middleware options
    }).listen(8080, "localhost", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        // Server listening
        gutil.log("[webpack-dev-server]", "http://localhost:8080/webpack-dev-server/index.html");

        // keep the server alive or continue?
        // callback();
    });
  done();
})