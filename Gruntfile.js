/* global module: true */
module.exports = function(grunt){
  grunt.initConfig({
    eslint:{
      options:{
        configFile:'.eslintrc.json'
      },
      target:[
        '*.js']
    },
    csslint:{
      options:{
        csslintrc:'.csslintrc'
      },
      src:['*.js']
    },
    htmlhint:{
      build:{
      options:{
        htmlhintrc:'.htmlhintrc'
      },
      src:['*.html']
      }
    }  ,
    htmlmin: {
      dist:{
        options: {
          collapseWhitespace: true,
          preserveLineBreaks: false                           
        },
        files: {
          'dist/index.html':'index.html',
          'dist/dlg-about.html':'./dlg-about/index.html',
          'dist/dlg-goto.html':'./dlg-goto/index.html',
          'dist/dlg-search.html':'./dlg-search/index.html',      
          'dist/dlg-replace.html':'./dlg-replace/index.html',
          'dist/dlg-font.html':'./dlg-font/index.html'
         }                   
     }  
    },
    cssmin: {
      target:{
      files:{ 
          'dist/dlg-about.css':'./dlg-about/dlg-about.css',
          'dist/dlg-goto.css':'./dlg-goto/dlg-goto.css',
          'dist/dlg-search.css':'./dlg-search/dlg-search.css',      
          'dist/dlg-replace.css':'./dlg-replace/dlg-replace.css',
          'dist/dlg-font.css':'./dlg-font/dlg-font.css'
      }
     }       
    },
    uglify: {
      release:{
        files: {
          'dist/dlg-about.js':'./dlg-about/dlg-about.js',
          'dist/dlg-goto.js':'./dlg-goto/dlg-goto.js',
          'dist/dlg-search.js':'./dlg-search/dlg-search.js',      
          'dist/dlg-replace.js':'./dlg-replace/dlg-replace.js',
          'dist/dlg-font.js':'./dlg-font/dlg-font.js'

        },
      }        
    }                
  
  });

  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default', ['htmlhint', 'csslint', 'eslint','uglify','cssmin', 'htmlmin']);
};
