// Gruntfile.js
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compass: {
          dev: {
            options: {
                 sassDir: ['sass'],
                 cssDir: ['stylesheets'],
                 environment: 'development'
            }
          },
        },
        shell: {
            jekyllServe: {
                command: 'LANG="en_US.UTF-8" LC_ALL="en_US.UTF-8" jekyll serve --safe --trace'
            },
            jekyllBuild: {
                command: 'LANG="en_US.UTF-8" LC_ALL="en_US.UTF-8" jekyll build --safe --trace'
            }
        },

        // watches sass and jekyll
        watch: {
          compass: {
            files: [
              'sass/*.{scss,sass}',
              'sass/imports/*.{scss,sass}'
            ],
            tasks: ['compass:dev'],
            options: {
                atBegin: true
            }
          },
          autoprefix: {
            files: [
              'stylesheets/screen-unprefixed.css'
            ],
            tasks: ['autoprefixer:target'],
            options: {
                atBegin: true
            }
          },
          site: {
            files: [
                '_includes/*.{html,md}',
                '_layouts/*.{html,md}',
                '_posts/*.{html,md,markdown}',
                '_config.yml',
                'img/*.{jpg,gif,png,svg}',
                'js/*.js',
                'stylesheets/*.css',
                'speakers/*.{html,md}',
                'sponsors/*.{html,md}',
                '*.{html,md}',
            ],
            tasks: ['shell:jekyllBuild'],
            options: {
                interrupt: true,
                atBegin: true
            }
          }
        },
        svgstore: {
          options: {
            prefix: 'svg-',
            svg: {
              style: 'display: none;'
            },
            symbol: {
              fill: 'currentColor',
            }
          },
          default : {
            files: {
              '_includes/svg-sprite.svg': ['svg/*.svg'],
            }
          }
        },
        autoprefixer: {
          target: {
            src: 'stylesheets/screen-unprefixed.css',
            dest: 'stylesheets/screen.css'
          }
        },
        concurrent: {
          target: {
            tasks: ['shell:jekyllServe', 'watch:compass', 'watch:site', 'watch:autoprefix'],
            options: {
              logConcurrentOutput: true,
              limit: 4
            }
          }
        }
    });

    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-svgstore');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['svgstore', 'concurrent']);
};