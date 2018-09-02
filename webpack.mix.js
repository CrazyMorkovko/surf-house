let mix = require('laravel-mix');

mix.browserSync({
    proxy: false,
    server: true,
    files: [
        'css/app.css',
        '*.html']
});

mix.sass('sass/app.scss', 'css');
