// Includes
// Gulp the task runner
var gulp = require( 'gulp' );
// Compilador de Sass do Gulp
var sass = require( 'gulp-sass' );
// Minificador de CSS
var cssnano = require( 'cssnano' );
// PostCSS - permite tratamentos p/ o CSS 
var postcss = require( 'gulp-postcss' );
// PostCss - Adiciona prefixos webkit em componentes css que ainda podme precisar
var autoprefixer = require( 'autoprefixer' );
// Postcss - Agrupa todos @medias querys em um único local
var mqpacker = require( 'css-mqpacker' );

// Diretórios dos arquivos do projeto
var dev_css = 	'./sass/**/*.scss',
    prod_css = './assets/css/';

// Tarefa para compilar CSS em desenvolvimento
gulp.task( 'compile' , function(){
    var plugins = [ mqpacker, autoprefixer({remove: false}) ];

    return gulp.src( dev_css )
    .pipe( sass( {outputStyle: 'expanded', sourceComments: true } ).on( 'erro', sass.logError) )
    .pipe( postcss( plugins ) )
    .pipe( gulp.dest( prod_css ) );
});

// Tarefa que minifica CSS e Agrupa os @medias
gulp.task( 'minify-css', function(){
    var plugins = [ mqpacker , autoprefixer({remove: false}), cssnano ];

    return gulp.src( dev_css )
    .pipe( sass( {outputStyle: 'expanded', sourceComments: true } ).on( 'erro', sass.logError) )
    .pipe( postcss( plugins ) )
    .pipe( gulp.dest( prod_css ) );
});

// Executa tarefa compile quando modificado algum arquivo da pasta Sass
gulp.task('watch', function() {
    gulp.start( 'compile' );
    gulp.watch( dev_css , [ 'compile' ] );
});

