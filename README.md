# grunt-fbc

> Rum fb-compiler for grunt-cli.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-fbc --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-fbc');
```

## The "fbc" task

### Overview
In your project's Gruntfile, add a section named `fbc` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  fbc: {
    targetA: {
      argv: [
        'fb-core',  //Will be understood as 'fb/core.jade' or 'fb/core.html'
        'path/to/fb-banner',  //Will be understood as 'path/to/fb-banner.jade' direcly
        // More files
      ],
      options: {
        external: 'default.json', //External variables
        archive: true, // Create archives
        path: 'first/search/path:second/search/path', //Use ; instead on windows        // More options see "fbc --help"
        // All of them are available.
      }
    },
    // Other targets
  },
});
```

