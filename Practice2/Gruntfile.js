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
    });
    
    grunt.registerTask('default', ['jshint', 'jsdoc']);
};