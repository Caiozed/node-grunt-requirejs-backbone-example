module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        
        concat: {
            dist: {
                src:[
                    'client/js/libs/*.js',
                    'client/js/*.js',
                    'client/js/views/*.js',
                    'client/js/collections/*.js'
                ],
                    
                dest: 'client/js/build/production.js'
            }
        },
        
        uglify: {
            build:{
                src: 'client/js/build/production.js',
                dest: 'client/js/build/production.js'
            }
        },
        
        requirejs: {
          compile: {
            options: {
              baseUrl: 'client/',
              mainConfigFile: 'client/js/main.js',
              include: [ 'js/app.js', 'js/libs/require.js' ],
              out: 'client/js/build/optimized.js',
            }
          }
        },
        
        sass: {
          dist: {
              files: {
                  'client/css/main.css': 'client/css/scss/main.scss'
              }
          }  
        },
        
        cssmin: {
           target: {
            files: {
              'client/css/build/main.min.css': 'client/css/main.css'
            }
          }
        },
        
        watch:{
            scripts: {
                files: ['client/**/*.js','client/css/scss/main.scss'],
                tasks: ['requirejs', 'sass', 'cssmin'],
                options: {
                    spawn: false,
                }
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    grunt.registerTask('default', [/*'concat', 'uglify',*/'watch']);
};