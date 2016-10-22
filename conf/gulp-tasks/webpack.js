const gulp = require('gulp');
const gutil = require('gulp-util');
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

gulp.task('test', (done) => {
  console.log('task test');
  done();
});

gulp.task('serve', (done) => {
  // Start a webpack-dev-server
  const port = 4044;
  const cfg = require('../webpack/webpack-dev.conf');
  var compiler = webpack(cfg);
  var server = new WebpackDevServer(compiler, {
    stats: { colors: true }
  });
  server.listen(port, "localhost", function(err) {
      if(err) throw new gutil.PluginError("webpack-dev-server", err);
      // Server listening
      gutil.log("[webpack-dev-server]", `http://localhost:${port}/webpack-dev-server/index.html`);
      // keep the server alive or continue?
      done();
  });
});

gulp.task('compile', (done) => {
  const cfg = require('../webpack/webpack-dist.conf');
  var compiler = webpack(cfg);
  compiler.run(done);
});

gulp.task('build', gulp.series('clean', 'copy-files', 'compile'));