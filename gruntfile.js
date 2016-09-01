module.exports = function (grunt) {

grunt.initConfig({
  uglify: {
    my_target: {
      files: [{
          expand: true,
          cwd: './js',
          src: '*.js',
          dest: './js'
      }]
    }
  },

  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: './css',
      src: ['*.css', '!*.min.css'],
      dest: './css',
      ext: '.min.css'
    }]
  }
},

imagemin: {
  png: {
    options: {
      optimizationLevel: 7
    },
    files: [
      {
        expand: true,
        cwd: 'img/',
        src: ['**/*.png'],          // Could also match cwd line above. i.e. project-directory/img/
        dest: 'img/',
        ext: '.png'
      }
    ]
  },
  jpg: {
    options: {
      progressive: true
    },
    files: [
      {
        expand: true,
        cwd: 'img/',
        src: ['**/*.jpg'],
        dest: 'img/',
        ext: '.jpg'
      }
    ]
  }
},
sass: {
   dist: {
     files: [{
       expand: true,
       cwd: 'sass/',
       src: ['*.scss'],
       dest: 'css/',
       ext: '.css'
     }]
   }
 },
});

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['uglify', 'cssmin', 'imagemin', 'sass']);
};
