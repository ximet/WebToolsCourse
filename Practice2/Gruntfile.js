module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        'minjson': {
            build: {
              files: 'src/**/*.json'
            }
          }
    });

    grunt.loadTasks('tasks');
    
    grunt.registerTask('default', ['minjson']);
};