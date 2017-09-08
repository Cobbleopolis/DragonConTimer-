const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../webpackConfig/webpack.dev.config.js');

const buildPaths = require('../buildpaths');

const stationStore = require('./stationStore');

const app = express();

const isProduction = process.env.NODE_ENV === 'production';

// view engine setup
app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (isProduction) {
    app.use(favicon(path.join(__dirname, '..', 'dist', 'public', 'favicon.ico')));
    app.use('/', express.static(buildPaths.out.outputPath));
    app.get('/', (req, res) => {
        res.sendFile(buildPaths.out.htmlOutputFileName);
    })
} else {
    const compiler = webpack(webpackConfig);
    const middleware = webpackMiddleware(compiler, {
        publicPath: webpackConfig.output.publicPath,
        contentBase: 'src',
        stats: {
            colors: true,
            hash: true,
            timings: true,
            chunks: true,
            chunkModules: true,
            modules: false
        }
    });

    app.use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
    app.use(middleware);
    app.use(webpackHotMiddleware(compiler));
    app.get('/', (req, res) => {
        res.write(middleware.fileSystem.readFileSync(path.join(buildPaths.outputPath, 'index.html')))
    })
}

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

stationStore.init();

module.exports = app;
