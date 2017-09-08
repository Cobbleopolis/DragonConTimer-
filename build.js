process.env.NODE_ENV = 'production';

const ora = require('ora');
const rm = require('rimraf');
const chalk = require('chalk');
const webpack = require('webpack');

const buildPaths = require('./buildpaths');
const webpackConfig = require('./webpackConfig/webpack.production.config');

const spinner = ora('building for production...');
spinner.start();

rm(buildPaths.out.outputPath, err => {
    if (err) throw err;
    try {
        webpack(webpackConfig, (err, stats) => {
            spinner.stop();
            if (err) throw err;
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n');

            if (stats.hasErrors()) {
                console.log(chalk.red('Build failed with errors.\n'));
                process.exit(1);
            } else {
                console.log(chalk.cyan('Build complete.\n'));
            }
        })
    } catch(e) {
        spinner.stop();
        throw e;
    }
});