"use strict";

module.exports = function (grunt) {
    return {
        runLog: function runLogger () {
            grunt.log.writeln("logger start");
        }
    };
};