module.exports = function (grunt) {
    "use strict";

    var tasks = require('./logger.js')(grunt);

    grunt.registerTask('logger', 'Super mega task', tasks.runLog);
};