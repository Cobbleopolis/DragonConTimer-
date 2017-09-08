const path = require('path');

const srcPath = path.join(__dirname, 'src');
const entryPoint = path.join(srcPath, 'main.js');
const htmlTemplateFile = path.join(srcPath, 'index.html');

const assetPath = path.join(__dirname, 'public');

const testPath = path.join(__dirname, 'test');

const outputPath = path.join(__dirname, 'dist');
const htmlOutputFileName = 'index.html';

function getAssetPath(prefix, assetExt) {
    if (assetExt)
        if (Array.isArray(assetExt))
            return path.join(prefix, ...assetExt);
        else
            return path.join(prefix, assetExt);
    else
        return prefix;
}


module.exports = {
    in: {
        srcPath,
        entryPoint,
        htmlTemplateFile
    },
    assets: {
        in(assetExt) {
            return getAssetPath(assetPath, assetExt);
        },
        out(assetExt) {
            return getAssetPath('public', assetExt);
        }
    },
    test: {
        testPath
    },
    out: {
        outputPath,
        htmlOutputFileName
    }
};