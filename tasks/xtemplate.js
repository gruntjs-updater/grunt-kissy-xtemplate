/*
 * grunt-kissy-xtemplate
 * https://github.com/daxingplay/grunt-kissy-xtemplate
 *
 * Copyright (c) 2013 daxingplay
 * Licensed under the MIT license.
 */

'use strict';

var Xtemplate = require('kissy-xtemplate'),
	fs = require('fs'),
    path = require('path'),
    os = require('os'),
    chalk = require('chalk');

module.exports = function (grunt) {

    // Please see the Grunt documentation for more information regarding task
    // creation: http://gruntjs.com/creating-tasks

    grunt.registerMultiTask('xtemplate', 'Compile KISSY XTemplates.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options();

        var xtemp = new Xtemplate(options);

        this.files.forEach(function (f) {
            var src = f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file ' + chalk.cyan(filepath) + ' not found.');
                    return false;
                } else {
                    return true;
                }
            });

            if (src.length === 0) {
                grunt.log.warn('Destination ' + chalk.cyan(f.dest) + ' not written because src files were empty.');
                return;
            }
            src.forEach(function(src){
                xtemp.compileSync(src, f.dest);
//                grunt.log.ok('compiled ' + src + ' ===> ' + f.dest + ' successfully.');
            });
        });

    });

};
