
import Taskerify from 'taskerify';

Taskerify.config.sourcemaps = false;
Taskerify.config.srcPath = './src';
Taskerify.config.distPath = './dist';

const NODE_MODULES = './node_modules';
const SRC = Taskerify.config.srcPath;
const DIST = Taskerify.config.distPath;

const storeName = 'eduardo';
const commomFiles = ['geral'];

Taskerify((mix) => {
    commomFiles.map((file) => {
        mix.browserify(`${SRC}/js/${file}.js`, `${DIST}/js`)
        .sass(`${SRC}/scss/${file}.scss`, `${DIST}/css`);
    });
});