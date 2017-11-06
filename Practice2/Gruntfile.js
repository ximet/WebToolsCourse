module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
          },
    });
    
    grunt.registerTask('default', ['jshint']);
};