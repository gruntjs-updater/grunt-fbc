/*
 * grunt-fbc
 * https://github.com/karl/grunt-fbc
 *
 * Copyright (c) 2015 Karl Cauchy
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Configuration to be run (and then tested).
    fbc: {
      archive: {
        argv:['fb-core'],
        options:{
          external: 'default.json',
          archive:true
        }
      }
    },

    update_readme:{
      'package.json': {
         'readme': 'README.md'
      }
    }
    // Unit tests.

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-update-readme');

  // By default, lint and run all tests.
  grunt.registerTask('default', ['fbc']);

};
