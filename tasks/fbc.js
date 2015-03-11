/*
 * grunt-fbc
 * https://github.com/karl/grunt-fbc
 *
 * Copyright (c) 2015 Karl Cauchy
 * Licensed under the MIT license.
 */

'use strict';

var Util = require('fb-compiler').Util;

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('fbc', 'Run fbc from command line.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
	var file = this.target;
	var options = this.data;

	var util = new Util();
	util.setConfig(options);
	util.updateConfig();

	try{
		if(util.bStdInOut) {
			util.compileStdio();
		} else {
			util.compileAll();
		}
	} catch(e){
		console.log("" + e + "\n" + util.getDebugStackString());
	}
  });

};
