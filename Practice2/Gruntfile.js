module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
        },
        jsdoc: {
            dist : {
               src: ['src/**/*.js'],
               options: {
                   destination: 'doc'
   
                }
            }
        },
        postcss: {
            options: {
              map: true,
        
              processors: [
                require('pixrem')(), // add fallbacks for rem units
                require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
                require('cssnano')() // minify the result
              ]
            },
            dist: {
              src: 'src/*.css'
            }
          },
    });
    
    grunt.registerTask('default', ['jshint', 'jsdoc', 'postcss']);
};