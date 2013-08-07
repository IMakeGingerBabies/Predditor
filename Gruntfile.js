module.exports = function(grunt){
  
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src: ["src/predditor.main.js", "src/**/*.js"],
        dest: "lib/<%= pkg.name %>.js"
      }
    },
    uglify: {
      options: {
        banner: "/*! <%= pkg.name %> <%= grunt.template.today(\"dd-mm-yyyy\") %> */\n"
      },
      dist: {
        files: {
          "lib/<%= pkg.name %>.min.js": ["<%= concat.dist.dest %>"]
        }
      }
    },
    qunit: {
      files: ["test/**/*.html"]
    },
    jshint: {
      files: ["gruntfile.js", "src/**/*.js", "test/**/*.js"],
      options: {
        globals: {
          jQuery: true,
          console: true,
          module: true
        }
      }
    },
    watch: {
      files: ["<%= jshint.files %>"],
      tasks: ["jshint", "qunit"]
    },
    jsdoc: {
      dist: {
        src: ["src/*.js", "test/*.js"],
        options: {
          destination: "doc"
        }
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-jsdoc');
  
  // this would be run by typing "grunt test" on the command line
  grunt.registerTask('test', ['jshint', 'qunit']);

  // the default task can be run just by typing "grunt" on the command line
  grunt.registerTask('default', ['jshint', 'concat', 'uglify']);
  
  grunt.registerTask('all', ['jshint', 'qunit', 'concat', 'uglify', 'jsdoc']);
  
};