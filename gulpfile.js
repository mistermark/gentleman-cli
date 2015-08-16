var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

/* ========== Configs  ========== */

//Settings for nodeMon
var serverConf = {
  script: 'server/server.js',
  ext: 'js html'
};

/* ========== TASKS ========== */

gulp.task('dev', function(){
  return startNodeMon('development');
});

gulp.task('prod', function(){
  return startNodeMon('production');
});
/* ========== TASK FUNCTIONS ========== */


//Starts nodemon server, env is the environment the server is running in
//development for local dev, production on a server
function startNodeMon(env){

  serverConf.env = { 
    NODE_ENV : env
  };

  return nodemon(serverConf);

}